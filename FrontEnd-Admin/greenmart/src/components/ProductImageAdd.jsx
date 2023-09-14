import React, { useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import axios from 'axios';
import { constants } from '../utils/constants';
import { createUrl } from '../utils/utils';
import Sidebar from './Sidebar';

export const ProductImageAdd = () => {
  return (
    <>
    <Sidebar>
    <div>ProductImageAdd</div>
    </Sidebar>
    </>
    
  )
}

