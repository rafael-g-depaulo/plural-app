import React, {useEffect ,useState } from "react";
import styled from 'styled-components';
import axios from 'axios';
import { useParams } from "react-router-dom";
import Back from "Components/Post/background";
import PluralLogo from 'Components/Logo';
import NavBar from 'Components/Menu';

const Container = styled.div`
    display: inline-grid;
    width:100%;
    height:100%;
    grid-template-columns: 15% 75% 10%;
    grid-template-rows: 20% 10% 70%;
    grid-template-areas: 
        ". logo ."
        ". nav ."
        ". . ."
    ;

`;


const LogoDiv = styled.div`
    grid-area: logo;
    display: flex;
    justify-content:flex-start;
    align-items: flex-end;
    height:100%;
    width: 100%;

`;


// const Navbar = styled.div`
//     grid-area: nav;
//     display:flex;
//     width:100%;
//     background: rgba(0,0,0,0);

// `;

// const Button = styled.button`
//   display: inline-block;
//   color: #f26522;
// `;






export const Blog = ({...props}) =>{
    const [data, setData] = useState({info:[], isFetching:false})
    const {id_post} = useParams();

    useEffect(() => {
        const fecthData = async () => {
            try {
                setData({info: data, isFetching: true});
                const response = await axios.get('/api/blogs/'+id_post);
                setData({info: response.data, isFetching: false});
                console.log(response.data);
            } catch (e) {
                console.log(e);
                setData({info: data, isFetching: false});
            }
        };
        fecthData();
    }, []);
    
    console.log("oi estamos aqui")
    console.log("id"+id_post)
    return(
        <Back>
            <Container>
                <LogoDiv>   
                    <PluralLogo></PluralLogo>
                    </LogoDiv>
                    <NavBar></NavBar>

                </Container>

        </Back>
    )
}

export default Blog