import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/selectors';
import { selectUserName } from '../../redux/selectors'

import Title from '../../components/title';

const Home = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const name = useSelector(selectUserName);

    return (
        <div>
            <Title>
                {!isLoggedIn
                    ? 'Welcome! Please, login.'
                    : `Welcome! ${name}`
                }
            </Title>
        </div>
    );
};

export default Home;