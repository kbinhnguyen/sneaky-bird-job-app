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
      <div id="form-box">
        <div>EMPLOYMENT APPLICATION</div>
        <form id="form-form"
          // encType="multipart/form-data"
          onSubmit={handleSubmit(submitSuccess, submitError)}>
          <div className="field">
            <label>
              <div>First Name <span>*</span></div>
              <div>
                <input
                  {...register('firstName', { required: 'Missing first name'})}
                  type="text"
                  className="text-input"
                />
              </div>
              {errors?.firstName && errors?.firstName.message}
            </label>
          </div>
          <div className="field">
            <label>
              <div>Last Name <span>*</span></div>
              <div>
                <input
                  {...register('lastName', { required: 'Missing last name' })}
                  type="text"
                  className="text-input"
                />
              </div>
              {errors?.lastName && errors?.lastName.message}
            </label>
          </div>
          <div className="field">
            <label>
              <div>Phone Number <span>*</span></div>
              <div>
                <input
                  {...register('phone', { required: 'Missing phone number' })}
                  type="tel"
                  className="text-input"
                />
              </div>
              {errors?.phone && errors?.phone.message}
            </label>
          </div>
          <div className="field">
            <label>
              <div>Email Address <span>*</span></div>
              <div>
                <input
                  {...register('email', { required: 'Missing email address' })}
                  type="email"
                  className="text-input"
                />
              </div>
              {errors?.email && errors?.email.message}
            </label>
          </div>
          <div className="field">
            <label>
              <div>Position To Apply For <span>*</span></div>
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
          <div className="field">
            <label>
              <div>Best Time To Reach You <span>*</span></div>
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
          <div className="field">
            <label>
              <div>Résumé URL</div>
              <div>
                <input
                  type="url" {...register('resume')}
                  className="text-input"
                />
              </div>
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
          <div id="submit-wrapper">
            <input type="submit" className="btn" />
          </div>
        </form>
      </div>
      <style jsx>
        {`
          #form {
            display: grid;
            align-content: center;
            justify-content: center;
            background: #E48225;
          }

          #form-box {
            background: white;
            width: 500px;
            padding: 40px;
            border: 3px solid black;
            border-radius: 10px;
          }

          #form-form {
            display: grid;
            padding-top: 10px;
            height: 500px;
            width: 100%;
            align-items: center;
            grid-template-rows: repeat(8, 1fr);
          }

          .field {
            padding-top: 10px;
            width: 100%;
          }

          label {
            display: grid;
            gap: 10px;
          }

          #submit-wrapper {
            padding-top: 15px;
          }

          .text-input {
            width: 80%;
            cursor: text;
            border: 0;
            border-bottom: 1px solid #222;
            background: transparent;
          }

          input:focus {
            outline: none;
          }

          span {
            color: red;
          }

        `}
      </style>
    </div>
  );
}