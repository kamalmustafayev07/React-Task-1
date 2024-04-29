import Experience from "./Experience";
import Contacts from "./Contacts";
import PersonalInfo from "./PersonalInfo";

function UserCV() {
    let [name, age, location, experience, phone, email] = ['Name: Kamal Mustafayev', 'Age: 19', 'Location: Baku,Sabuncu ray.', 'Experince: 1 year as Frontend Developer', 'Phone: +994709912212', 'Email: kamalmustafayev23062@gmail.com'];

    return (
        <>
            <div className="person-cv">
                <PersonalInfo name={name} age={age} location={location} />
                <Experience experience={experience} />
                <Contacts phone={phone} email={email} />
            </div>
        </>
    )
}

export default UserCV