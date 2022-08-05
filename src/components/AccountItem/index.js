import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/d86a84238dfc2142ac6a7726762bd543.jpeg?biz_tag=tiktok_user.user_cover&x-expires=1659758400&x-signature=DsTkMu2A9KaRuGUlrqjopCE26ME%3D"
                alt=""
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <h4>Toni Bui</h4>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check')}/>
                </p>
                <span className={cx('username')}>@tonibui31</span>
            </div>
        </div>
    );
}

export default AccountItem;
