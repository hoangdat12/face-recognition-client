import React from 'react';
import HeaderBack from '../../components/HeaderBack';
import NavBar from '../../components/Navbar';

const Terms = () => {
  return (
    <div>
      <NavBar />
      <div className='px-4 py-6 mb-[80px]'>
        <HeaderBack title={'Terms of service'} />
        <div className='mt-10 px-4'>
          <p>
            Your privacy is important to us. It is Human Assist AI's policy to
            respect your privacy regarding any information we may collect from
            you through our app, odoan.
          </p>
          <p>
            We only ask for personal information when we truly need it to
            provide a service to you. We collect it by fair and lawful means,
            with your knowledge and consent. We also let you know why we’re
            collecting it and how it will be used.
          </p>
          <p>
            We only retain collected information for as long as necessary to
            provide you with your requested service. What data we store, we’ll
            protect within commercially acceptable means to prevent loss and
            theft, as well as unauthorized access, disclosure, copying, use or
            modification.
          </p>
          <p>
            We don’t share any personally identifying information publicly or
            with third-parties, except when required to by law.
          </p>
          <p>
            Our app may link to external sites that are not operated by us.
            Please be aware that we have no control over the content and
            practices of these sites, and cannot accept responsibility or
            liability for their respective privacy policies.
          </p>
          <p>
            You are free to refuse our request for your personal information,
            with the understanding that we may be unable to provide you with
            some of your desired services.
          </p>
          <p>
            Your continued use of our app will be regarded as acceptance of our
            practices around privacy and personal information. If you have any
            questions about how we handle user data and personal information,
            feel free to contact us.
          </p>
          <p>This policy is effective as of 17 July 2020.</p>
          <p>
            Privacy Policy created for ODOAN by{' '}
            <a
              href='https://humanassistai.com'
              title='Privacy Policy created for ODOAN'
            >
              HAI.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
