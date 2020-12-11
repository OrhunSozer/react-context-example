import React, { useContext } from 'react'
import { v4 as uuidv4 } from "uuid";
import { Formik } from "formik";
import validations from "./validations";
import styles from "./styles.module.css";


import UserContext from "../../contexts/UserContext";

function NewUser() {
    const { users, setUsers } = useContext(UserContext);

	return (
		<>
			<Formik
				initialValues={{
					id :"",
					name:"",
					email:""
				}}
				onSubmit={async (values, bag) => {
					setUsers(
						[...users, 
							{ 
								id: uuidv4(), 
								name: values.name,
								email: values.email
							}
						]
					);
					console.log(users);
					bag.resetForm();
				}}
				validationSchema={validations}
			>
				{({
					values,
					handleChange,
					handleSubmit,
					handleBlur,
					isSubmitting,
					errors,
					touched,
				}) => (
					<div>
						<fieldset>
							<legend>New User</legend>
							<div>
								<input
									placeholder="Full Name"
									name="name"
									value={values.name}
									onChange={handleChange}
									onBlur={handleBlur}
									disabled={isSubmitting}
								/>
								{errors.name && touched.name && (
									<div className={styles.error}>{errors.name}</div>
								)}
								{errors.name ? "" : ""}
							</div>
							<br></br>
							<div>
								<input
									placeholder="E-Mail"
									name="email"
									value={values.email}
									onChange={handleChange}
									onBlur={handleBlur}
									disabled={isSubmitting}
								/>
								{errors.email && touched.email && (
									<div className={styles.error}>{errors.email}</div>
								)}
							</div>
							<br></br>
							<div>
								<input
									type="button"
									value="Add User"
									onClick={handleSubmit}
									disabled={isSubmitting}
								/>
							</div>
						</fieldset>
					</div>
				)}
			</Formik>
		</>
	);
}

export default NewUser
