import React from 'react';
import ReactDOM from 'react-dom/client';
import Library from './chapter_03/Library';
import Clock from './chapter_04/Clock';
import CommentList from './chapter_05/CommentList';
import NotificationList from './chapter_06/NotificationList';
import Counter from './chapter_07/Counter';
import Accommodate from './chapter_07/Accommodate';
import ConfirmButton from './chapter_08/ConfirmButton_fun';
import LandingPage from './chapter_09/LandingPage';
import AttendanceBook from './chapter_10/AttendanceBook';
import SignUp from './chapter_11/SignUp';
import TemperatureInput from './chapter_12/TemperatureInput';
import Calculator from './chapter_12/Calculator';
import ProfileCard from './chapter_13/ProfileCard';
import DarkOrLight from './chapter_14/DarkOrLight';
import Blocks from './chapter_15/Block';
import JsonExam01 from './react-server/JsonExam01';
import StsCall_01 from './react-server/StsCall_01';
import NumberGuessGame from './react-server/NumberGuessGame/NumberGuessGame';
import MemberCrudGui from './react-server/comp/MemberCrudGui';
import YongdomCrud01 from './react-server-yongdon/YongdomCrud01';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <YongdomCrud01 />
  </React.StrictMode>
);