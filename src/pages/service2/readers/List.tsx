import { Button, Column, DataTable, Dialog, InputText, classNames, Password, Calendar, InputTextarea, Dropdown, ToggleButton, Checkbox, TriStateCheckbox, Row } from 'primereact';
import { MultiSelect } from 'primereact/multiselect';
import { RadioButton } from "primereact/radiobutton";
import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { Field, Form, FormSpy } from 'react-final-form';
import { connect } from 'react-redux';
import ENV, { Logger, ReaderService } from 'services';
import { ApplicationState } from 'store';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { page } from 'store/root';
//import {pageMaster} from '../../../pages/service1/master/List';
import { goToPage, goToPageExt } from 'routes'

interface State {
    user?: string,
    password?: string,
    dispatch?: any,
    goToPage: any,
    goToPageExt: any
}
type Props = State

const Readers_List = (props: Props) => {
    const pageSize = 10
    const [items, setItems] = useState([])
    const toast = useRef<Toast>(null);
    const [totalRecords, setTotalRecords] = useState(0)
    const [lazyParams, setLazyParams] = useState<any>({
        first: 0,
        rows: pageSize,
        page: 0,
        filters: {}
    })
    useEffect(() => {
        let cancel = false
        
        //Logger.debug('getMasters')
        ReaderService.getReader(lazyParams.page + 1, pageSize)
            .then((res) => {
                if (cancel) return
                setItems(res?.data.Results)
                setTotalRecords(res?.data.RowCount)
            })
            .catch((err) => {
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
        console.log("11111log",event.data);
        
        if (formRef.current) formRef.current.ShowPromt(event.data.Id)
    }
   
    const confirmDeleteProduct = async (evnt: any) => {
        console.log("evntevntevntevnt1111", evnt);
        
        confirmDialog({
            message: 'Bạn có muốn xóa bản ghi này không?',
                        className: 'confirmDialog',
                        header: 'Xác nhận',
                        icon: 'pi pi-exclamation-triangle',
                        acceptIcon: 'pi pi-check',
                        acceptLabel: 'Đồng ý',
            accept: async () => {
                let CheckDelete = await ReaderService.deleteReader(evnt.Id);
                let paramLoad={
                    first: 0,
                rows: pageSize,
                page: 0,
                filters: {}
                }
                setLazyParams(paramLoad);
                 if (CheckDelete?.status==200) {
                    toast.current?.show({severity: 'success', summary: 'Success Message', detail: 'Xóa thành công'});
                 }
                
            },  
            reject: () => { }
        });
        

    }
    // const onRowEditComplete = (e:any) => {
    //     console.log("evntevntevntevnt",e);
    // };
    
    const actionBodyTemplate = (rowData: any) => {
        console.log(rowData);
        return (
            <React.Fragment>
                {/* <Button icon="pi pi-pencil" rounded outlined className="mr-2" onClick={() => editProduct(rowData)} /> */}
                <Button icon="pi pi-trash" onClick={() => confirmDeleteProduct(rowData)} />
            </React.Fragment>
        );
    };
    const formRef = useRef<any>(null)
    return (
        
        <>
        {console.log("ENV.HOME_PATH",ENV.HOME_PATH)}
        <Toast ref={toast} />
        <React.Fragment>
            Thông tin bạn đọc
            <DataTable lazy value={items} rows={pageSize} onPage={onPage} onSort={onSort} onFilter={onFilter} totalRecords={totalRecords} first={lazyParams.first}
                paginator currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport"
                onRowDoubleClick={onSelect}
            >
                <Column field="Name" header="Name" filter></Column>
                <Column field="Card_No" header="Số thẻ" filter></Column>
                <Column field="Address" header="Địa chỉ" filter></Column>
                <Column field="Email" header="Email" filter></Column>
                {/* <Column rowEditor  headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
                <Button className="ed-form-button p-button-raised p-button-text" type="button" 
                   label="Thêm mới"  onClick={(evnt)=> deleteReader(evnt) } 
                /> */}
                <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '12rem' }}></Column>
            </DataTable>
            <Button className="ed-form-button p-button-raised p-button-text" type="button" label="Thêm mới" onClick={() => { if (formRef.current) formRef.current.ShowPromt("") }} />
            <Button className="ed-form-button p-button-raised p-button-text" type="button" label="Ẩn lưới đi" onClick={()=> { props.goToPage("service2/master") }} />
            
            <FormDetail ref={formRef} />
        </React.Fragment>

        

        </>
        
    )
}

const mapStateToProps = (state: ApplicationState) => {
    return {
    }
}
// const mapDispatchToProps = {
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Readers_List)

const mapDispatchToProps = {
    goToPage: goToPage,
    goToPageExt: goToPageExt,
}
export default connect(mapStateToProps, mapDispatchToProps)(Readers_List)

const FormDetail = forwardRef((props: {}, ref) => {
    const sleep = (ms: any) => new Promise(resolve => setTimeout(resolve, ms))
    const formID = "formReader"
    const [prompt, setPrompt] = useState(false)
    const [itemId, setItemId] = useState("")
    const [item, setItem] = useState<any>(null)
    const [ingredient, setIngredient] = useState<string>('');
    const [icheckbox, seticheckbox] = useState<boolean>(false);
    const [iTriStateCheckbox, setiTriStateCheckbox] = useState<boolean>(false);
    const [iToggleButton, setiToggleButton] = useState<boolean>(false);
    const [strBirthday, setstrBirthday] = useState(new Date());
    const [strExpiredate, setstrExpiredate] = useState(new Date());
    
    const toast = useRef(null);
    useImperativeHandle(ref, () => ({
        ShowPromt(itemId: any) {
            
            if (itemId !== "") {
                setItemId(itemId)
                ReaderService.getReaderByID(itemId)
                    .then((res) => {
                        let _item = {
                            Id: res?.data.Id,
                            Name: res?.data.Name,
                            Sex: res?.data.Sex,
                            Card_No: res?.data.Card_No,
                            Password: res?.data.Password,
                            Birthday: res?.data.Birthday,
                            Expire_date: res?.data.Expire_date,
                            Address: res?.data.Address,
                            Tell: res?.data.Tell,
                            Email: res?.data.Email,
                            Node: res?.data.Node,
                            Avatar: "N",
                            Checkbox: res?.data.Checkbox,
                            MultipleSelect: res?.data.MultipleSelect,
                            Radio: res?.data.Radio,
                            TristateCheckbox: res?.data.TristateCheckbox,
                            togglebutton: res?.data.togglebutton,
                        }
                        setItem(_item)
                        setIngredient(_item.Radio)
                        seticheckbox(_item.Checkbox)
                        var date = new Date(_item.Birthday);
                        var dateExpiredate = new Date(_item.Expire_date);
                        console.log("strBirthday",strBirthday);
                        console.log("strBirthday set ",_item.Birthday);
                        console.log("date333333333333",date);
                        setstrBirthday(date)
                        setstrExpiredate(dateExpiredate)

                        console.log("_item.TristateCheckbox_item.TristateCheckbox", _item.TristateCheckbox);
                        if (_item.TristateCheckbox == "false") {
                            setiTriStateCheckbox(false)
                        }
                        else {
                            setiTriStateCheckbox(true)
                        }
                        if (_item.togglebutton == "false") {
                            setiToggleButton(false)
                        }
                        else {
                            setiToggleButton(true)
                        }





                    })
                    .catch((err) => {
                        console.log(err)
                    })
            } else {
                setItem({
                    Id: "",
                    Name: "",
                })
            }
            setPrompt(true)
        },
    }))
    const [selectedCity, setSelectedCity] = useState(null);
    const Sex = [
        { label: 'Nam', value: 'M' },
        { label: 'Nữ', value: 'F' }

    ];
    interface City {
        name: string;
        code: string;
    }
    const [selectedChonNhieu, setSelectedChonNhieu] = useState<City | null>(null);
    const ChonNhieu: City[] = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];


    const CheckedRadio = (values: any, valueDefault: any) => {
        console.log("valuesvaluesvalues", values);
        console.log("valueDefaultvalueDefaultvalueDefault", valueDefault);
        setIngredient(values.value);
        // if (values.value ==valueDefault){
        //     return true;
        // }
        // else{
        //     return false;
        // }

    }


    const CheckedCheckbox = (values: any) => {
        console.log("Checkbox", values);
        if (values == false) {
            seticheckbox(true);
        }
        else {
            seticheckbox(false);
        }


    }


    const categories = [
        { name: 'Accounting', key: 'A' },
        { name: 'Marketing', key: 'M' },
        { name: 'Production', key: 'P' },
        { name: 'Research', key: 'R' }
    ];
    const [selectedCategories, setSelectedCategories] = useState([categories[1]]);

    // const onCategoryChange = (e) => {
    //     let _selectedCategories = [...selectedCategories];

    //     if (e.checked)
    //         _selectedCategories.push(e.value);
    //     else
    //         _selectedCategories = _selectedCategories.filter(category => category.key !== e.value.key);

    //     setSelectedCategories(_selectedCategories);
    // };

    const onSubmit = async (values: any, form: any) => {
        console.log("1111", values);
        console.log("ingredientingredientingredient", ingredient);
        console.log("iTriStateCheckboxiTriStateCheckbox", iTriStateCheckbox);
        var strTristateCheckbox = iTriStateCheckbox.toString();
        var striToggleButton = iToggleButton.toString();
        let item = {
            Id: values.Id,
            Name: values.Name,
            Sex: values.Sex,
            Card_No: values.Card_No,
            Password: values.Password,
            Birthday: values.Birthday,
            Expire_date: values.Expire_date,
            Address: values.Address,
            Tell: values.Tell,

            Email: values.Email,
            Node: values.Node,
            Avatar: "N",
            Checkbox: icheckbox,
            MultipleSelect: "",
            Radio: ingredient,
            TristateCheckbox: strTristateCheckbox,
            togglebutton: striToggleButton,
        }
        console.log("2222222222", item);
        let promise = (item.Id === "") ? ReaderService.createReader(item) : ReaderService.updateMaster(item)
        promise.then((res) => {
            if (res?.status !== 200) {
                alert("Có lỗi không mong muốn, liên hệ với quản trị để được trợ giúp.")
            }
            else {
                setPrompt(false)
            }
        })
            .catch((err) => {
                alert("Có lỗi không mong muốn, liên hệ với quản trị để được trợ giúp.")
                console.log(err)
            })
        await sleep(250)
    }
    const setStateReader = (itemReader: any) => {
        //console.log("itemReader",itemReader);
        //console.log("itemitemitem1111",item);
        //item.Sex=itemReader;
        //console.log("itemitemitem",item);
        setItem({
            ...item,
            Sex: itemReader
        });

    }
    const OnchangerTriStateCheckbox = (value: any) => {
        console.log("valuevaluevalue", value);
        if (value == null) {
            setiTriStateCheckbox(true);
        }
        else {
            setiTriStateCheckbox(Boolean(value));
        }

        console.log("setiTriStateCheckbox", iTriStateCheckbox);
    }
    const OnchangerToggleButton = (value: any) => {
        console.log("valuevaluevalue", value);
        if (value == null) {
            setiToggleButton(true);
        }
        else {
            setiToggleButton(Boolean(value));
        }

        console.log("setiToggleButton", setiToggleButton);
    }



    const setStateBirthdayReader = (itemReader: any) => {
        //console.log("itemReader",itemReader);
        console.log("itemitemitem1111", itemReader);
        //item.Sex=itemReader;
        console.log("itemitemitem", item);
        setItem({
            ...item,
            Birthday: itemReader
        });
        // let dobTmp = itemReader.day + "/" + itemReader.month + "/" + itemReader.year;
       // setstrBirthday(itemReader);
       
        //console.log("itemitemitem",item);

        //setItemId
    }
    const setStateExpiredateReader = (itemReader: any) => {
        setItem({
            ...item,
            Expire_date: itemReader
        });
 
    }
    
    
    console.log("123", item)
    return (
        <>
            <Toast ref={toast} />
            <ConfirmDialog></ConfirmDialog>

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
                                <form id={formID} onSubmit={handleSubmit} onKeyDown={(e) => { }}>
                                    <div className={classNames("p-fluid ed-form")}>
                                        <div className={classNames('ed-form-body')}>
                                            <Field key="Id" name="Name" render={({ input, meta }) => {
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
                                            }} />


                                            <Field key="Sex" name="Sex" render={({ input, meta }) => {
                                                // { console.log("inputinputinput", { ...input }) }
                                                return <React.Fragment>


                                                    <div className="p-grid p-col-12">
                                                        <div className={classNames("p-field p-col-2 p-md-2")}>
                                                            <label htmlFor="Sex">Giới tính</label>
                                                        </div>
                                                        <div className={classNames("ed-form-control p-md-10")}>
                                                            {/* <InputText id="Sex" {...input} autoFocus /> */}
                                                            <Dropdown id="Sex" value={input.value} onChange={(e) => { setStateReader(e.value) }} options={Sex} optionLabel="label" placeholder="Chọn giới tính" />
                                                        </div>
                                                    </div>


                                                </React.Fragment>
                                            }} />

                                            <Field key="Card_No" name="Card_No" render={({ input, meta }) => {
                                                return <React.Fragment>

                                                    <div className="p-grid p-col-12">
                                                        <div className={classNames("p-field p-col-2 p-md-2")}>
                                                            <label htmlFor="Card_No">Số thẻ</label>
                                                        </div>
                                                        <div className={classNames("ed-form-control p-md-10")}>
                                                            <InputText id="Card_No" {...input} autoFocus />
                                                        </div>
                                                    </div>


                                                </React.Fragment>
                                            }} />


                                            <Field key="Password" name="Password" render={({ input, meta }) => {
                                                return <React.Fragment>

                                                    <div className="p-grid p-col-12">
                                                        <div className={classNames("p-field p-col-2 p-md-2")}>
                                                            <label htmlFor="Password">Mật khẩu</label>
                                                        </div>
                                                        <div className={classNames("ed-form-control p-md-10")}>
                                                            <Password id="Password" {...input} autoFocus />
                                                        </div>
                                                    </div>


                                                </React.Fragment>
                                            }} />

                                            <Field key="Birthday" name="Birthday" render={({ input, meta }) => {
                                                return <React.Fragment>


                                                    <div className="p-grid p-col-12">
                                                        <div className={classNames("p-field p-col-2 p-md-2")}>
                                                            <label htmlFor="Birthday">Ngày sinh</label>
                                                        </div>
                                                        <div className={classNames("ed-form-control p-md-10")}>
                                                            <Calendar  dateFormat='dd/mm/yy'  id="Birthday"    value={strBirthday} onChange={(e) => { console.log("e.value", e.value); setStateBirthdayReader(e.value) }} />
                                                        </div>
                                                    </div>

                                                </React.Fragment>
                                            }} />

                                            <Field key="Expire_date" name="Expire_date" render={({ input, meta }) => {
                                                return <React.Fragment>

                                                    <div className="p-grid p-col-12">
                                                        <div className={classNames("p-field p-col-2 p-md-2")}>
                                                            <label htmlFor="Expire_date">Hạn thẻ</label>
                                                        </div>
                                                        <div className={classNames("ed-form-control p-md-10")}>
                                                            <Calendar id="Expire_date" dateFormat='dd/mm/yy'     value={strExpiredate} onChange={(e) => { console.log("e.value", e.value); setStateExpiredateReader(e.value) }} />
                                                            
                                                        </div>
                                                    </div>


                                                </React.Fragment>
                                            }} />


                                            <Field key="Address" name="Address" render={({ input, meta }) => {
                                                return <React.Fragment>


                                                    <div className="p-grid p-col-12">
                                                        <div className={classNames("p-field p-col-2 p-md-2")}>
                                                            <label htmlFor="Address">Địa chỉ</label>
                                                        </div>
                                                        <div className={classNames("ed-form-control p-md-10")}>
                                                            <InputTextarea id="Address" {...input} autoFocus />
                                                        </div>
                                                    </div>

                                                </React.Fragment>
                                            }} />

                                            <Field key="Tell" name="Tell" render={({ input, meta }) => {
                                                return <React.Fragment>


                                                    <div className="p-grid p-col-12">
                                                        <div className={classNames("p-field p-col-2 p-md-2")}>
                                                            <label htmlFor="Tell">Điện thoại</label>
                                                        </div>
                                                        <div className={classNames("ed-form-control p-md-10")}>
                                                            <InputText id="Tell" {...input} autoFocus />
                                                        </div>
                                                    </div>

                                                </React.Fragment>
                                            }} />

                                            <Field key="Email" name="Email" render={({ input, meta }) => {
                                                return <React.Fragment>

                                                    <div className="p-grid p-col-12">
                                                        <div className={classNames("p-field p-col-2 p-md-2")}>
                                                            <label htmlFor="Email">Email</label>
                                                        </div>
                                                        <div className={classNames("ed-form-control p-md-10")}>
                                                            <InputText id="Email" {...input} autoFocus />
                                                        </div>
                                                    </div>



                                                </React.Fragment>
                                            }} />

                                            <Field key="Node" name="Node" render={({ input, meta }) => {
                                                return <React.Fragment>

                                                    <div className="p-grid p-col-12">
                                                        <div className={classNames("p-field p-col-2 p-md-2")}>
                                                            <label htmlFor="Node">Ghi chú</label>
                                                        </div>
                                                        <div className={classNames("ed-form-control p-md-10")}>
                                                            <InputText id="Node" {...input} autoFocus />
                                                        </div>
                                                    </div>


                                                </React.Fragment>
                                            }} />

                                            {/* <Field key="MultipleSelect" name="MultipleSelect" render={({ input, meta }) => {
                                            return <React.Fragment>
                                               
                                               <div className="p-grid p-col-12 ">
                                                    <div className={classNames("p-field p-col-2 p-md-2")}>
                                                        <label htmlFor="MultipleSelect">MultipleSelect</label>
                                                    </div>
                                             
                                                    <MultiSelect value={selectedChonNhieu} onChange={(e) => setSelectedChonNhieu(e.value)} options={ChonNhieu} optionLabel="name" 
                                                        placeholder="Chọn nhiều" className="w-full md:w-20rem" />
                                                    
                                                </div>
                                            </React.Fragment>
                                        }}/> */}

                                            <Field key="Checkbox" name="Checkbox" render={({ input, meta }) => {
                                                return <React.Fragment>

                                                    <div className="p-grid p-col-12">
                                                        <div className={classNames("p-field p-col-2 p-md-2")}>
                                                            <label htmlFor="Checkbox">Checkbox</label>
                                                        </div>

                                                        {/* <Checkbox  name="category"  onChange={onCategoryChange} checked={selectedCategories.some((item) => item.key === )} /> */}
                                                        <Checkbox value={icheckbox} name="Checkbox" checked={icheckbox} onChange={(e) => CheckedCheckbox(e.value)} ></Checkbox>

                                                    </div>


                                                </React.Fragment>
                                            }} />

                                            <Field key="TristateCheckbox" name="TristateCheckbox" render={({ input, meta }) => {
                                                return <React.Fragment>

                                                    <div className="p-grid p-col-12">
                                                        <div className={classNames("p-field p-col-2 p-md-2")}>
                                                            <label htmlFor="TristateCheckbox">TristateCheckbox</label>
                                                        </div>

                                                        {/* <Checkbox  name="category"  onChange={onCategoryChange} checked={selectedCategories.some((item) => item.key === )} /> */}
                                                        <TriStateCheckbox name="TristateCheckbox" checked={iTriStateCheckbox} value={iTriStateCheckbox} onChange={(e) => OnchangerTriStateCheckbox(e.value)} className="p-invalid" />

                                                    </div>


                                                </React.Fragment>
                                            }} />

                                            <Field key="togglebutton" name="togglebutton" render={({ input, meta }) => {
                                                return <React.Fragment>

                                                    <div className="p-grid p-col-12">
                                                        <div className={classNames("p-field p-col-2 p-md-2")}>
                                                            <label htmlFor="togglebutton">togglebutton</label>
                                                        </div>

                                                        {/* <Checkbox  name="category"  onChange={onCategoryChange} checked={selectedCategories.some((item) => item.key === )} /> */}

                                                        <ToggleButton name="ToggleButton" checked={iToggleButton} onChange={(e) => OnchangerToggleButton(e.value)} />
                                                    </div>


                                                </React.Fragment>
                                            }} />

                                            <Field key="Radio" name="Radio" render={({ input, meta }) => {
                                                return <React.Fragment>

                                                    <div className="p-grid p-col-12">
                                                        <div className={classNames("p-field p-col-2 p-md-2")}>
                                                            <label htmlFor="Radio">Radio</label>
                                                        </div>
                                                        <div className={classNames("ed-form-control p-md-10")}>
                                                            <div className="flex align-items-center">
                                                                {/* checked={CheckedRadio({...input},"1")}  */}
                                                                {/* value={input.value} onChange={(e) => {setStateReader(e.value)}} options={Sex} optionLabel="label" placeholder="Chọn giới tính" */}
                                                                <RadioButton inputId="ingredient1" name="Radio" value="1" onChange={(e) => setIngredient(e.value)} checked={ingredient === '1'} />
                                                                <label htmlFor="ingredient1" className="ml-2">Cheese</label>
                                                            </div>
                                                            <div className="flex align-items-center">
                                                                <RadioButton inputId="ingredient2" name="Radio" value="2" onChange={(e) => setIngredient(e.value)} checked={ingredient === '2'} />
                                                                <label htmlFor="ingredient2" className="ml-2">Mushroom</label>
                                                            </div>
                                                            <div className="flex align-items-center">
                                                                <RadioButton inputId="ingredient3" name="Radio" value="3" onChange={(e) => setIngredient(e.value)} checked={ingredient === '3'} />
                                                                <label htmlFor="ingredient3" className="ml-2">Pepper</label>
                                                            </div>
                                                            <div className="flex align-items-center">
                                                                <RadioButton inputId="ingredient4" name="Radio" value="4" onChange={(e) => setIngredient(e.value)} checked={ingredient === '4'} />
                                                                <label htmlFor="ingredient4" className="ml-2">Onion</label>
                                                            </div>
                                                        </div>
                                                    </div>


                                                </React.Fragment>
                                            }} />





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
        </>
    )
})