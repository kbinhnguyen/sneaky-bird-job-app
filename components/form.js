import { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

export default function Form(){
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const submitSuccess = async (data) => {
    let inputData = data;
    if (data.resume) {
      try {
        const fileName = data.resume[0].name;
        const fileType = fileName.match(/(.pdf|.docx|.doc)$/)[0];
        const response = await axios.post('/api/apply', { ...data, resume: true, fileType });
        const { url } = response.data;
        const formData = new FormData();
        formData.append('resume', data.resume[0]);
        const awsRes = await axios.put(url, data.resume[0]);
        console.log('aws response', awsRes.data);
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        await axios.post('/api/apply', { ...data, resume: false });
      } catch (e) {
        console.log(e);
      }
    }
  };

  const submitError = (err) => {
    console.log(err);
  }

  return (
    <div id="form">
      <div id="form-box">
        <div>EMPLOYMENT APPLICATION</div>
        <form id="form-form"
          onSubmit={handleSubmit(submitSuccess, submitError)}>
          <div className="field">
            <label>
              <div className="label-name">First Name <span>*</span></div>
              <div className="text-input">
                <input
                  {...register('firstName', { required: 'Missing first name'})}
                  type="text"
                  className="text-input-input"
                />
              </div>
              {errors?.firstName && (<em className="error">{errors?.firstName.message}</em>)}
            </label>
          </div>
          <div className="field">
            <label>
              <div className="label-name">Last Name <span>*</span></div>
              <div className="text-input">
                <input
                  {...register('lastName', { required: 'Missing last name' })}
                  type="text"
                  className="text-input-input"
                />
              </div>
              {errors?.lastName && (<em className="error">{errors?.lastName.message}</em>)}
            </label>
          </div>
          <div className="field">
            <label>
              <div className="label-name">Phone Number <span>*</span></div>
              <div className="text-input">
                <input
                  {...register('phone', { required: 'Missing phone number' })}
                  type="tel"
                  className="text-input-input"
                />
              </div>
              {errors?.phone && (<em className="error">{errors?.phone.message}</em>)}
            </label>
          </div>
          <div className="field">
            <label>
              <div className="label-name">Email Address <span>*</span></div>
              <div className="text-input">
                <input
                  {...register('email', { required: 'Missing email address' })}
                  type="email"
                  className="text-input-input"
                />
              </div>
              {errors?.email && (<em className="error">{errors?.email.message}</em>)}
            </label>
          </div>
          <div className="field">
            <label>
              <div className="label-name">Position To Apply For <span>*</span></div>
              <div className="select-input">
                <select {...register('position', { required: 'Missing application position' })}>
                  <option value="">-</option>
                  <option value="Counter">Counter</option>
                  <option value="Carry Out">Carry Out</option>
                  <option value="Culinary">Culinary</option>
                </select>
              </div>
              {errors?.position && (<em className="error">{errors?.position.message}</em>)}
            </label>
          </div>
          <div className="field">
            <label>
              <div className="label-name">Best Time To Reach You <span>*</span></div>
              <div className="select-input">
                <select {...register('time', { required: 'Missing time to contact' })}>
                  <option value="">-</option>
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Evening">Evening</option>
                </select>
              </div>
              {errors?.time && (<em className="error">{errors?.time.message}</em>)}
            </label>
          </div>
          <div className="field">
            <label>
              <div className="label-name">Upload Your Resume</div>
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
          </div>
          <div id="submit-wrapper">
            <input type="submit" disabled={!!errors} className="btn" />
          </div>
        </form>
      </div>
      <style jsx>
        {`
          #form {
            height: max-content;
            padding-top: 70px;
            padding-bottom: 70px;
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
            width: 100%;
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

        .error {
          color: red;
          font-size: 14px;
        }

        .label-name {
          color: #E48225;
        }

        `}
      </style>
    </div>
  );
}