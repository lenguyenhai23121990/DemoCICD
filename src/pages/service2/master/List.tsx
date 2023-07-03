import React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from 'store';
import { goToPage, goToPageExt } from 'routes'
// import { Button, Column, DataTable, Dialog, InputText, classNames, Password, Calendar, InputTextarea, Dropdown, ToggleButton, Checkbox, TriStateCheckbox, Row } from 'primereact';
import { Button } from 'primereact/button';
import { Column} from 'primereact/column';
import { DataTable} from 'primereact/datatable';
import { Dialog} from 'primereact/dialog';
import { InputText} from 'primereact/inputtext';
import { Password} from 'primereact/password';
import { Calendar} from 'primereact/Calendar';
import { InputTextarea} from 'primereact/InputTextarea';
import { Dropdown} from 'primereact/Dropdown';
import { ToggleButton} from 'primereact/ToggleButton';
import { Checkbox} from 'primereact/Checkbox';
import { TriStateCheckbox} from 'primereact/TriStateCheckbox';
import { Row} from 'primereact/Row';
interface State {
    user?: string,
    password?: string,
    dispatch?: any,
    goToPage: any,
    goToPageExt: any
}
type Props = State
const Service2_ListMaster = (props: Props) => {
    return (
        <React.Fragment>
            Service2: Masters
            <Button className="ed-form-button p-button-raised p-button-text" type="button" label="Quay lại" onClick={()=> { props.goToPage("service2/readers") }} />
        </React.Fragment>
    )
}

const mapStateToProps = (state: ApplicationState) => {
    return {
    }
}
const mapDispatchToProps = {
    goToPage: goToPage,
    goToPageExt: goToPageExt,
}
// const mapDispatchToProps = {
// }
export default connect(mapStateToProps, mapDispatchToProps)(Service2_ListMaster)