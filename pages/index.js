import { useEffect } from "react";
import Image from "next/image";
import tw from "tailwind-styled-components";
import Map from "./components/map";
import Head from "next/head";
import Navbar from "./components/Navbar";


export default function Home() {

  return (
    <Wrapper>
      <Navbar/>
      <Map>
      <ActionButtons>
        <ActionButton><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path d="M 23.951172 4 A 1.50015 1.50015 0 0 0 23.070312 4.3222656 L 8.8730469 15.521484 C 7.0935305 16.919676 6 19.100391 6 21.400391 L 6 40.5 C 6 41.133333 6.2367979 41.80711 6.7148438 42.285156 C 7.1928895 42.763202 7.8666667 43 8.5 43 L 18.5 43 C 19.133333 43 19.80711 42.763202 20.285156 42.285156 C 20.763202 41.80711 21 41.133333 21 40.5 L 21 30.5 C 21 30.218182 21.218182 30 21.5 30 L 26.5 30 C 26.781818 30 27 30.218182 27 30.5 L 27 40.5 C 27 41.133333 27.236798 41.80711 27.714844 42.285156 C 28.19289 42.763202 28.866667 43 29.5 43 L 39.5 43 C 40.133333 43 40.80711 42.763202 41.285156 42.285156 C 41.763202 41.80711 42 41.133333 42 40.5 L 42 21.400391 C 42 19.155946 41.012069 16.901298 39.087891 15.490234 L 24.929688 4.3222656 A 1.50015 1.50015 0 0 0 23.951172 4 z M 24 7.4101562 L 37.271484 17.876953 A 1.50015 1.50015 0 0 0 37.3125 17.910156 C 38.388318 18.699095 39 20.044835 39 21.400391 L 39 40 L 30 40 L 30 30.5 C 30 28.581818 28.418182 27 26.5 27 L 21.5 27 C 19.581818 27 18 28.581818 18 30.5 L 18 40 L 9 40 L 9 21.400391 C 9 20.100391 9.7060794 18.680715 10.726562 17.878906 A 1.50015 1.50015 0 0 0 10.728516 17.876953 L 24 7.4101562 z"></path>
</svg></ActionButton>
        </ActionButtons>
      </Map>
      <AddressDetailsWrapper>
      <AddressDetails>
      <Lineone>
          <InputHouseNo placeholder="House No." />
          <InputAddress placeholder="Address" />
      </Lineone>
      <Input placeholder="Name"/>
        <Input placeholder="Phone No."/>     
        <SubmitButton>
        <Button>Submit</Button>
      </SubmitButton>   
      </AddressDetails>
      </AddressDetailsWrapper>
      
    </Wrapper>
  );
}

const Wrapper = tw.div`flex flex-col bg-gray-200 h-screen relative overflow-hidden`;
const ActionButtons = tw.div`flex`;
const ActionButton = tw.div`bg-gray-200 p-20 m-20 h-3`;
const AddressDetailsWrapper = tw.div`absolute bottom-0 left-0 right-0 h-1/5 flex-nowrap`;
const AddressDetails = tw.div`flex flex-col bg-white rounded-custom `;
const Input = tw.input`h-20 bg-black text-l p-5 flex-1 m-5 items-center mt-4 rounded-custom corners`;
const Lineone = tw.div`flex w-full`;
const InputHouseNo = tw.input`h-20 bg-black text-l p-5 flex-1 m-5 items-center mt-5 rounded-custom corners basis-1.5 mr-4`;
const InputAddress = tw.input`h-15 bg-black text-l p-5 flex-1 m-5 items-center mt-5 rounded-custom corners basis-2.5`;
const SubmitButton = tw.div`flex justify-center mt-5`;
const Button = tw.button`px-8 py-4 border-2 border-black rounded-custom text-black bg-white hover:bg-gray-200 `;