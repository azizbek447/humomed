import ContactForm from '../../components/ContactForm.jsx';
import ContactInfo from '../../components/ContactInfo.jsx';
import ServicesList from '../../components/ServicesList.jsx';

const ThreePartMedicalForm = () => {
  return (
    <div className='mx-auto w-full max-w-md space-y-6 px-4 pt-32 text-sm text-gray-700 md:max-w-lg lg:max-w-3xl'>
      <ServicesList />
      <ContactInfo />
      <ContactForm />
    </div>
  );
};

export default ThreePartMedicalForm;
