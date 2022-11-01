import { useForm } from "react-hook-form";

export default function Form(){
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  return (
    <div>
      <form>
        <div>
          <label>
            <div>First Name</div>
            <div>
              <input {...register('firstName', { required: 'Missing first name'})} type="text" />
            </div>
          </label>
        </div>
        <div>
          <label>
            <div>Last Name</div>
            <div>
              <input {...register('lastName', { required: 'Missing last name' })} type="text" />
            </div>
          </label>
        </div>
        <div>
          <label>
            <div>Phone Number</div>
            <div>
              <input {...register('phone', { required: 'Missing phone number' })} type="tel" autocomplete />
            </div>
          </label>
        </div>
        <div>
          <label>
            <div>Email Address</div>
            <div>
              <input {...register('email', { required: 'Missing email address' })} type="email" />
            </div>
          </label>
        </div>
        <div>
          <label>
            <div>Position To Apply For</div>
            <div>
              <select {...register('position', { required: 'Missing application position' })}>
                <option value="">-</option>
                <option value="Bartender">Bartender</option>
                <option value="Server">Server</option>
                <option value="Cooks">Cooks</option>
                <option value="Food/Line Prep">Food/Line Prep</option>
                <option value="Dishwasher">Dishwasher</option>
                <option value="Host/Hostess">Host/Hostess</option>
              </select>
            </div>
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
          </label>
        </div>
        <div>
          <label>
            <div>Upload Your Resume</div>
            <input
              type="file"
              accept="application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            />
            <div>Accepted file types: pdf, doc, docx.</div>
          </label>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}