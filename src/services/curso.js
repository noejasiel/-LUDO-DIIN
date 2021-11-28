import axios from 'axios';
const baseUrl = '/api/cursos';

const getCurso = async id => {
    const curso = await axios.get(`${baseUrl}/${id}`)
    return curso.data
}

const getCursos = async ()=>{
    const cursos = await axios.get(baseUrl)
    return cursos.data
}

export default {getCurso, getCursos}