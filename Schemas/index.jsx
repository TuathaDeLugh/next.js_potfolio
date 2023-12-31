import * as Yup from "yup";

export const emailSchema = Yup.object({
  fullname: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  subject: Yup.string().min(3).required("Please enter subject"),
  details: Yup.string().min(10).required("Please enter detail"),
});


export const loginSchema =  Yup.object({
  username: Yup.string().min(2).max(25).required("Please enter username"),
  password: Yup.string().min(3).required("Please enter password"),
});

export const projectSchema = Yup.object({
  title: Yup.string().min(2).max(25).required("Please enter title"),
  info: Yup.string().min(5).required("Please enter information"),
  technology: Yup.string().min(3).required('Please enter technologies'),
  github: Yup.string().matches(
    ('/'),
    'Please enter valid URL'
).required('Please enter Github Repo'),
  image:Yup.string().required('Please enter image link'),
  summary:Yup.string().min(20).required('Please enter details'),
  livedemo:Yup.string().matches(
    ('/'),
    'Please enter valid URL or you can put /'
).required('Please enter livedemo link'),
});

export const upprojectSchema = Yup.object({
  newtitle: Yup.string().min(2).max(25).required("Please enter title"),
  newinfo: Yup.string().min(5).required("Please enter information"),
  newtechnology: Yup.string().min(3).required('Please enter technologies'),
  newgithub: Yup.string().matches(
    ('/'),
    'Please enter valid URL'
).required('Please enter Github Repo'),
  newsummary:Yup.string().min(20).required('Please enter details'),
  newlivedemo:Yup.string().matches(
    ('/'),
    'Please enter valid URL or you can put /'
).required('Please enter livedemo link'),
});

export const eduSchema =  Yup.object({
  degree: Yup.string().min(2).max(25).required("Please enter degree name"),
  place: Yup.string().min(3).required("Please enter place of degree"),
  marks:Yup.string().min(3).required("Please enter Marks, Grade or CGPA "),
});

export const upEduSchema =  Yup.object({
  newdegree: Yup.string().min(2).max(25).required("Please enter degree name"),
  newplace: Yup.string().min(3).required("Please enter place of degree"),
  newmarks:Yup.string().min(3).required("Please enter Marks, Grade or CGPA "),
});