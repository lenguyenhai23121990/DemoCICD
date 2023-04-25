import { Button, Column, DataTable, Dialog, InputText, classNames } from 'primereact';
import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { Field, Form, FormSpy } from 'react-final-form';
import { connect } from 'react-redux';
import ENV, { Logger, SV1Service } from 'services';
import { ApplicationState } from 'store';
interface State {
    user?: string,
    password?: string,
    dispatch?: any,
}
type Props = State
const Service1_ListMaster = (props: Props) => {
    const pageSize = 10
    const [items, setItems] = useState([])
    const [totalRecords, setTotalRecords] = useState(0)
    const [lazyParams, setLazyParams] = useState<any>({
        first: 0,
        rows: pageSize,
        page: 0,
        filters: {}
    })
    useEffect(() => {
        let cancel = false
        Logger.debug('getMasters')
        SV1Service.getMasters(lazyParams.page + 1, pageSize)
        .then((res)=>{
            if (cancel) return
            setItems(res?.data.Results)
            setTotalRecords(res?.data.RowCount)
        })
        .catch((err)=>{
            Logger.error(err)
        })
        return () => { cancel = true }
    }, [lazyParams])
    const onPage = (event: any) => {
        Logger.debug('onPage')
        let _lazyParams = { ...lazyParams, ...event }
        setLazyParams(_lazyParams)
    }
    const onSort = (event: any) => {
        Logger.debug('onSort')
        let _lazyParams = { ...lazyParams, ...event };
        setLazyParams(_lazyParams);
    }
    const onFilter = (event: any) => {
        Logger.debug('onFilter')
        let _lazyParams = { ...lazyParams, ...event }
        _lazyParams['first'] = 0
        _lazyParams['page'] = 0
        setLazyParams(_lazyParams)
    }
    const onSelect = (event: { data: { Id: any; }; }) => {
        Logger.debug('onSelect')
        if(formRef.current) formRef.current.ShowPromt(event.data.Id)
    }
    const formRef = useRef<any>(null)
    return (
        <React.Fragment>
            Service1: Masters
            <DataTable lazy value={items} rows={pageSize} onPage={onPage} onSort={onSort} onFilter={onFilter} totalRecords={totalRecords} first={lazyParams.first}
                paginator currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport"
                onRowDoubleClick={onSelect}
            >
                <Column field="Name" header="Name" filter></Column>
            </DataTable>
            <Button className="ed-form-button p-button-raised p-button-text" type="button" label="Thêm mới" onClick={() => { if(formRef.current) formRef.current.ShowPromt("") }} />
            <FormDetail ref={formRef} />
        </React.Fragment>
    )
}

const mapStateToProps = (state: ApplicationState) => {
    return {
    }
}
const mapDispatchToProps = {
}
export default connect(mapStateToProps, mapDispatchToProps)(Service1_ListMaster)

const FormDetail = forwardRef((props: { }, ref) => {
    const sleep = (ms: any) => new Promise(resolve => setTimeout(resolve, ms))
    const formID = "formMaster"
    const [prompt, setPrompt] = useState(false)
    const [itemId, setItemId] = useState("")
    const [item, setItem] = useState<any>(null)
    useImperativeHandle(ref, () => ({
        ShowPromt(itemId: any) {
            if(itemId !== ""){
                setItemId(itemId)
                SV1Service.getMaster(itemId)
                .then((res)=>{
                    let _item = {
                        Id: res?.data.Id,
                        Name: res?.data.Name,
                    }
                    setItem(_item)
                })
                .catch((err)=>{
                    console.log(err)
                })
            }else{
                setItem({
                    Id: "",
                    Name: "",
                })
            }
            setPrompt(true)
        },
    }))
    const onSubmit = async (values: any, form: any) => {
        let item = {
            Id: values.Id,
            Name: values.Name,
        }
        let promise = (itemId === "") ? SV1Service.createMaster(item) : SV1Service.updateMaster(item)
        promise.then((res)=>{
            if(res?.status !== 200){
                alert("Có lỗi không mong muốn, liên hệ với quản trị để được trợ giúp.")
            }
            else{
                setPrompt(false)
            }
        })
        .catch((err)=>{
            alert("Có lỗi không mong muốn, liên hệ với quản trị để được trợ giúp.")
            console.log(err)
        })
        await sleep(250)
    }
    return (
        <Dialog maskClassName="digital-sign" header="Form Master" style={{ width: '60vw' }} visible={prompt} onHide={() => setPrompt(false)}>
            <Form 
                onSubmit={onSubmit}
                mutators={{
                    setValue: ([name, newValue], state, { changeValue }) => {
                        changeValue(state, name, value => newValue)
                    },
                    setFieldTouched: ([name, touched], state) => {
                        const field = state.fields[name]
                        if (field) {
                            field.touched = !!touched
                        }
                    }
                }}
                initialValues={item}
                subscription={{ submitting: false, pristine: false }}
                //validate={validate}
                render={({ handleSubmit, form, submitting, pristine, values, errors }) => {
                    return (
                        <React.Fragment>
                            <form id={formID} onSubmit={handleSubmit} onKeyDown={(e) => {}}>
                                <div className={classNames("p-fluid ed-form")}>
                                    <div className={classNames('ed-form-body')}>
                                        <Field key="Name" name="Name" render={({ input, meta }) => {
                                            return <React.Fragment>
                                                <div className="p-grid p-col-12">
                                                    <div className={classNames("p-field p-col-2 p-md-2")}>
                                                        <label htmlFor="Name">Name</label>
                                                    </div>
                                                    <div className={classNames("ed-form-control p-md-10")}>
                                                        <InputText id="Name" {...input} autoFocus />
                                                    </div>
                                                </div>
                                            </React.Fragment>
                                        }}/>
                                    </div>
                                </div>
                                <div className={classNames("p-col-12 p-grid button-center-align")}>
                                    <Button className="p-button-raised p-button-text" type="submit" label="Ghi lại" disabled={submitting || pristine} />
                                    <Button className="p-button-raised p-button-text" type="button" label="Đóng" onClick={() => setPrompt(false)} />
                                </div>
                                <FormSpy subscription={{ values: true, errors: true }}>
                                    {({ values, errors }) => {
                                        if (ENV.PROFILE === "development")
                                            return (
                                                <pre style={{ background: 'lightgray' }}>
                                                    {JSON.stringify({ formValues: values, error: errors }, null, 2)}
                                                </pre>
                                            )
                                        else
                                            return <React.Fragment></React.Fragment>
                                    }}
                                </FormSpy>
                            </form>
                        </React.Fragment>
                    )
                }}
            />
        </Dialog>
    )
})