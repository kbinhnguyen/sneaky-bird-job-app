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
              <div className="text-input">
                <input
                  {...register('firstName', { required: 'Missing first name'})}
                  type="text"
                  className="text-input-input"
                />
              </div>
              {errors?.firstName && errors?.firstName.message}
            </label>
          </div>
          <div className="field">
            <label>
              <div>Last Name <span>*</span></div>
              <div className="text-input">
                <input
                  {...register('lastName', { required: 'Missing last name' })}
                  type="text"
                  className="text-input-input"
                />
              </div>
              {errors?.lastName && errors?.lastName.message}
            </label>
          </div>
          <div className="field">
            <label>
              <div>Phone Number <span>*</span></div>
              <div className="text-input">
                <input
                  {...register('phone', { required: 'Missing phone number' })}
                  type="tel"
                  className="text-input-input"
                />
              </div>
              {errors?.phone && errors?.phone.message}
            </label>
          </div>
          <div className="field">
            <label>
              <div>Email Address <span>*</span></div>
              <div className="text-input">
                <input
                  {...register('email', { required: 'Missing email address' })}
                  type="email"
                  className="text-input-input"
                />
              </div>
              {errors?.email && errors?.email.message}
            </label>
          </div>
          <div className="field">
            <label>
              <div>Position To Apply For <span>*</span></div>
              <div className="select-input">
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
              <div className="select-input">
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
              <div className="text-input">
                <input
                  type="url" {...register('resume')}
                  className="text-input-input"
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
            height: max-content;
            width: 100%;
            align-items: center;
            grid-template-rows: repeat(8, 1fr);
            gap: 15px;
          }

          .field {
            padding-top: 1px;
            width: 100%;
          }

          label {
            display: grid;
            gap: 5px;
          }

          #submit-wrapper {
            padding-top: 15px;
          }

          .text-input {
            width: 80%;
            cursor: text;
            border-bottom: 1px solid #222;
          }

          .text-input-input {
            border: 0;
            background: transparent;
            padding-bottom: 8px;
          }

          input:focus {
            outline: none;
          }

          span {
            color: red;
          }

          select {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            border: 0;
            width: 100%;
            cursor: pointer;
            background-size: 10px;
            background-position: 98%;
            background-repeat: no-repeat;
            background-image: url('https://www.svgrepo.com/show/12432/down-chevron.svg');
         }

         select:focus {
          outline: none;
        }

        .select-input {
          width: 80%;
          border-bottom: 1px solid #222;
          padding-bottom: 8px;
        }

        `}
      </style>
    </div>
  );
}