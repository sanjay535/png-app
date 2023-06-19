import { useState } from 'react';

const Query = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		mobile: '',
		description: '',
	});
	const [errorData, setErrorData] = useState({
		name: null,
		email: null,
		mobile: null,
		description: null,
	});
	const onChange = (event: any) => {
		setFormData((prevData: any) => {
			return {
				...prevData,
				[event.target.name]: event.target.value,
			};
		});
	};
	return (
		<>
			{/* <section className="formSection">
				Name:{' '}
				<input
					className={`input-text ${error ? 'err' : ''}`}
					name="name"
					onChange={onChange}
				/>
				email:{' '}
				<input
					className={`input-text ${error ? 'err' : ''}`}
					name="email"
					onChange={onChange}
				/>
				phone:{' '}
				<input
					className={`input-text ${error ? 'err' : ''}`}
					name="phone"
					onChange={onChange}
				/>
				Desciption:{' '}
				<textarea
					className={`input-text ${error ? 'err' : ''}`}
					name="description"
					rows={5}
					onChange={onChange}
				/>
			</section> */}
		</>
	);
};
export default Query;
