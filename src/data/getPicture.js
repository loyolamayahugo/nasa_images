import axios from 'axios'

const key = `weyHtVAZmbcLMAmH9CQtpzzAtzbCRHVG5bFg5Cg4`
const baseUrl = `https://api.nasa.gov/planetary/apod?api_key=${key}`

export const getPictureDay = async (date) => {
    if(date === undefined){
        try {
            const response = await axios({
            url: `${baseUrl}`,
            method: "GET",
        });
            return response;        
        } catch (error) {
            console.log(error);
        }
    }else{
        try {
            const response = await axios({
            url: `${baseUrl}&date=${date}`,
            method: "GET",
        });
            return response;        
        } catch (error) {
            console.log(error);
        }
    }
}
