import './styles/MainPage.css'
import { useState, useEffect } from 'react'
import { getPictureDay } from '../data/getPicture';
import { CardToday } from '../components/CardToday';
import { Cardmovile } from '../components/Cardmovile';

export const MainPage = () => {

    const[date, setDate] = useState();

    const[data, setData] = useState({});
    const[error, setError] = useState('');
    const[imgUrl, setImgUrl] = useState('');

    useEffect(() => {
        async function loadInfo(){
            const response = await getPictureDay(date)
            if(response.status === 200){
                setData(response.data)
                setImgUrl(response.data.url)
                console.log(response.data)
            }else{
                console.log(setError('no hay info'))
            }
        }
        loadInfo();
    },[date])

    return(
        <>
            <div className="row container-info">
                <CardToday 
                    data={data} 
                    date={date} 
                    imgUrl={imgUrl}
                    error={error} 
                    setDatePiker={(e) => setDate(e)}/>               
            </div>

            <Cardmovile 
                data={data}
                setDatePiker={(e) => setDate(e)}/>
        </>
    )
}