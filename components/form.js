import { useForm } from "react-hook-form";
import axios from 'axios';

export default function Form(){
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const submitSuccess = (data) => {
    const formData = new FormData();
    formData.append('resume', data.resume[0]);
    axios.post('/api/apply', formData, {
      // headers: {
      //   'Content-Type': 'multipart/form-data'
      // },
    });
  };

  const submitError = (err) => {
    console.log(err);
  }

  return (
    <div id="form">
      <form
        // encType="multipart/form-data"
        onSubmit={handleSubmit(submitSuccess, submitError)}>
        <div>
          <label>
            <div>First Name</div>
            <div>
              <input {...register('firstName', { required: 'Missing first name'})} type="text" />
            </div>
            {errors?.firstname && errors?.firstName.message}
          </label>
        </div>
        <div>
          <label>
            <div>Last Name</div>
            <div>
              <input {...register('lastName', { required: 'Missing last name' })} type="text" />
            </div>
            {errors?.lastName && errors?.lastName.message}
          </label>
        </div>
        <div>
          <label>
            <div>Phone Number</div>
            <div>
              <input {...register('phone', { required: 'Missing phone number' })} type="tel" />
            </div>
            {errors?.phone && errors?.phone.message}
          </label>
        </div>
        <div>
          <label>
            <div>Email Address</div>
            <div>
              <input {...register('email', { required: 'Missing email address' })} type="email" />
            </div>
            {errors?.email && errors?.email.message}
          </label>
        </div>
        <div>
          <label>
            <div>Position To Apply For</div>
            <div>
              <select {...register('position', { required: 'Missing application position' })}>
                <option value="">-</option>
                <option value="Counter">Counter</option>
                <option value="Carry Out">Carry Out</option>
                <option value="Culinary">Culinary</option>
              </select>
            </div>
            {errors?.position && errors?.position.message}
          </label>
        </div>
        <div>
          <label>
            <div>Best Time To Reach You</div>
            <div>
              <select {...register('time', { required: 'Missing time to contact' })}>
                <option value="">-</option>
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Evening">Evening</option>
              </select>
            </div>
            {errors?.time && errors?.time.message}
          </label>
        </div>
        {/* <div>
          <label>
            <div>Upload Your Resume</div>
            <input
              {...register(
                'resume',
                {
                  validate: {
                    quantity: (input) => (input.length === 1),
                    fileFormat: (input) => ([
                      'application/pdf',
                      'application/msword',
                      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                    ].includes(input[0].type)),
                    size: (input) => (input[0].size <= 10000000),
                  },
                }
              )}
              name="resume"
              type="file"
              multiple={false}
              accept="application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            />
            <div>Accepted file types: pdf, doc, docx.</div>
            {errors?.resume && errors?.resume.message}
          </label>
        </div> */}
        <input type="submit" className="btn" />
      </form>
    </div>
  );
}