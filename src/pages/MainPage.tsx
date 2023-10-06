import { Link } from "react-router-dom";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function MainPage() {
  return (
    <>
      <h1>Test</h1>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      <Link to={"/signin"}>
        <p>Sign in</p>
      </Link>
    </>
  );
}

export default MainPage;
