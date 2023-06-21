import clsx from 'clsx';
import css from './Title.module.css';

const Title = ({ children }) => {
    return (
        <h2 className={clsx(css.title)}>
            {children}
        </h2>
    );
};

export default Title;