import{K as g,m as f,j as r,P as h}from"./app-mJobidlQ.js";import{A as x,I as n,B as j}from"./AuthenticatedLayout-BUrUltKo.js";import{T as l,I as S,P as k,a as v}from"./TextInput-rOnsTip_.js";import{S as b,I as E}from"./Select-D-1TG3Yv.js";import{S as P}from"./BaseLayout-BzUIBd55.js";import{I}from"./IconMail-CataTV4R.js";const A=()=>{const{user:t,roles:o}=g().props;console.log(t);const a=f({full_name:t.full_name||"",email:t.email||"",username:t.username||"",role:t.roles[0]||"",password:""}),i=e=>{e.trim()?a.setError("full_name",""):a.setError("full_name","Nama lengkap harus diisi")},m=e=>{const s=e.trim();s?/\S+@\S+\.\S+/.test(s)?a.setError("email",""):a.setError("email","Alamat surel tidak sah"):a.setError("email","Alamat surel harus diisi")},u=e=>{e.trim()?a.setError("username",""):a.setError("username","Nama pengguna harus diisi")},d=e=>{const s=e.trim();e&&!s?a.setError("password","Kata sandi harus diisi"):a.setError("password","")},c=e=>{e?a.setError("role",""):a.setError("role","Peran harus dipilih")},p=e=>{e.preventDefault(),a.put(route("users.update",t.id),{onSuccess:()=>{},onError:()=>{}})};return r.jsx(x,{title:"Ubah Pengguna",pageHeadings:{description:"Ubah detail pengguna",breadcrumbs:[{title:"Pengguna",route:"users.index"},{title:t.full_name},{title:"Ubah"}]},children:r.jsx(h,{p:32,children:r.jsxs("form",{onSubmit:p,children:[r.jsxs(P,{children:[r.jsx(l,{value:a.data.full_name,onChange:e=>{a.setData("full_name",e.target.value),i(e.target.value)},leftSection:r.jsx(S,{}),label:"Nama Lengkap",placeholder:"Masukkan nama lengkap",error:a.errors.full_name}),r.jsx(l,{value:a.data.email,onChange:e=>{a.setData("email",e.target.value),m(e.target.value)},leftSection:r.jsx(I,{}),label:"Alamat Surel",placeholder:"Masukkan alamat surel",error:a.errors.email}),r.jsx(l,{value:a.data.username,onChange:e=>{a.setData("username",e.target.value),u(e.target.value)},leftSection:r.jsx(n,{}),label:"Nama Pengguna",placeholder:"Masukkan nama pengguna",error:a.errors.username}),r.jsx(b,{defaultValue:a.data.role,onChange:e=>{a.setData("role",e),c(e)},leftSection:r.jsx(n,{}),label:"Peran",data:o,placeholder:"Pilih peran",error:a.errors.role}),r.jsx(k,{value:a.data.password,onChange:e=>{a.setData("password",e.target.value),d(e.target.value)},leftSection:r.jsx(v,{}),label:"Kata Sandi (kosongkan jika tidak ingin mengubah)",placeholder:"Masukkan kata sandi baru",error:a.errors.password})]}),r.jsx(j,{fullWidth:!0,mt:16,leftSection:r.jsx(E,{}),type:"submit",loading:a.processing,disabled:!a.data.full_name.trim()||!a.data.email.trim()||!a.data.username.trim()||!a.data.role.trim(),children:"Simpan"})]})})})};export{A as default};
