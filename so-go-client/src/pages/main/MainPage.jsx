import Header from '../common/TheHeader.jsx';
import HotPlace from './HotPlace.jsx';
import ReviewList from './ReviewList.jsx';
import Menu from '@/pages/common/Menu.jsx';

export default function MainPage() {
    return (
        <>
        <Header/>
        <HotPlace />
        <ReviewList />
        <Menu/>
        </>
    )
}