import CompanyDescription from "./CompanyDescription";
import FormContact from "./FormContact";
import CompanyMapLocation from "./CompanyMapLocation";

const MainContent = () => {
    return (
        <div>
            <CompanyDescription></CompanyDescription>
            <hr></hr>
            <FormContact></FormContact>
            <hr></hr>
            <CompanyMapLocation></CompanyMapLocation>
        </div>
    );
};
export default MainContent;