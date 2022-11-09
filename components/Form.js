import { useState } from 'react';
import { useForm } from "react-hook-form";
import Image from 'next/image';
import axios from 'axios';
import gif from '../public/icons/Spinner.gif';

export default function Form(){
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: 'onChange' });
  const [status, setStatus] = useState(null);

  const submitSuccess = async (data) => {
    setStatus('loading');
    if (data.resume && data.resume.length > 0) {
      try {
        const fileName = data.resume[0].name;
        const fileType = fileName.match(/(.pdf|.docx|.doc)$/)[0];
        const { data: { url } } = await axios.post('/api/apply', { ...data, resume: true, fileType });
        const formData = new FormData();
        formData.append('resume', data.resume[0]);
        await axios.put(url, data.resume[0]);
        setStatus('success');
      } catch (e) {
        setStatus('error');
      }
    } else {
      try {
        await axios.post('/api/apply', { ...data, resume: false });
        setStatus('success');
      } catch (e) {
        setStatus('error');
      }
    }
  };


  return (
    <div id="form">
      <div id="form-box">
        {status === 'success' && (
          <>
            <div id="form-title">APPLICATION SUBMITTED</div>
            <div id="success-content">Thank you for applying! We will get in touch with you shortly!</div>
          </>
        )}
        {status !== 'success' && (
          <>
            <div id="form-title">EMPLOYMENT APPLICATION</div>
            <form id="form-form" onSubmit={handleSubmit(submitSuccess)}>
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
                  <div id="file-input-wrapper">
                    <input
                      {...register('resume')}
                      name="resume"
                      type="file"
                      multiple={false}
                      accept="application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    />
                  </div>
                  <div className="regular-text"><em>Accepted file types: pdf, doc, docx. Limit: 10 MB.</em></div>
                  {errors?.resume && errors?.resume.message}
                </label>
              </div>
              <div id="submit-wrapper">
                {status !== 'loading' && (
                  <div className="loading-div">
                    {!isValid && (
                      <div className="btn inactive-btn">Submit</div>
                    )}
                    {isValid && (
                      <div className="btn">
                        <input type="submit" inactive={status === 'loading'} />
                      </div>
                    )}
                    {status === 'error' && (
                      <div id="submit-error">Submission was unsuccessful.<br />Please try again later!</div>
                    )}
                  </div>
                )}
                {status === 'loading'
                  && (
                    <div className="loading-div">
                      <div className="btn">Submitting</div>
                      <Image src={gif} alt="loading-icon" width={50} />
                    </div>
                  )}
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
