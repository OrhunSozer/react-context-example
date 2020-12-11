import * as yup from 'yup';

const validations = yup.object().shape({
	email: yup.string().email('Lütfen geçerli bir e-posta adresi giriniz!').required('E-posta alanı zorunludur!'),
	name: yup.string().max(60, `En fazla 60 karakter girilebilir!`).required('Ad soyad alanı zorunludur!')
});

export default validations;