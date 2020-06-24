import React, {useEffect ,useState } from "react";
import styled from 'styled-components';
import axios from 'axios';
import { useParams } from "react-router-dom";
import Back from "Components/Post/background";
import PluralLogo from 'Components/Logo';
import NavBar from 'Components/Menu';
import Area from "./textarea";
const Container = styled.div`
    display: inline-grid;
    width:100%;
    height:100%;
    grid-template-columns: 10% 80% 10%;
    /* grid-template-rows: 15% 5% 80%; */
    grid-template-areas: 
        ". logo ."
        ". nav ."
        ". blog ."
    ;

    @media(min-width:760px){
        grid-template-columns:20% 60% 20%;
    }

    @media(min-width:1800px){
        grid-template-columns:30% 40% 30%;
    }
`;


const LogoDiv = styled.div`
    grid-area: logo;
    display: flex;
    justify-content:flex-start;
    align-items: flex-end;
    height:15vh;
    width: 100%;
    margin-left: 5%;

    @media(min-width:760px){
        /* justify-content:center; */
    }

    @media(min-width:1020px){
        margin-top: 30vh;
    }

    @media(min-width:1800px){
        margin-top: 70vh;
    }

`;
const Logo = styled(PluralLogo)`

    @media(min-width:760px){
        height:auto;
        width:60%;
    }

    @media(min-width:1300px){
        height:auto;
        width:45%;
    }

`;

const Navigation = styled.div`
    grid-area: nav;
    width:100%;
    height: 5vh;
    margin-top: 2vh;
    display: flex;
    align-items:center;
    justify-content: flex-start;

    @media(min-width:760px){
        margin-top: 3vh;
    }

    @media(min-width: 1400px){
        margin-top: 6vh;
    }

    @media(min-width: 1800px){
        margin-top: 20vh;
    }

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
    const [data, setData] = useState({info:[], isFetching:true})
    const {id_post} = useParams();

    useEffect(() => {
        const fecthData = async () => {
            try {
                setData({info: data, isFetching: true});
                const response = await axios.get('/blogs/'+id_post);
                setData({info: response.data, isFetching: false});
            } catch (e) {
                console.log(e);
                setData({info: data, isFetching: false});
            }
        };
        fecthData();
    }, []);
    

    let date = data.info.created_at;
    return(
        <Back>
            <Container>
                <LogoDiv>   
                    <Logo></Logo>
                    </LogoDiv>
                    <Navigation>
                        <NavBar></NavBar>
                    </Navigation>
                        {
                            data.isFetching ? 
                            <p>Loading</p>
                            :
                            <Area info={data.info}/>

                        };




                </Container>

        </Back>
    )
}

export default Blog