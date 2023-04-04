import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { HiScissors, HiClipboardList } from 'react-icons/hi';
import { BUSINESS_NAME } from '../../Pages/aboutPage/about';

export const BRAND = BUSINESS_NAME;

export const HOME_NAV = 'בית';
export const ABOUT_NAV = 'קצת עליי';
export const WORK_NAV = ' עבודות ומחירים';
export const APPOINTMENT_NAV = 'תורים';

export const HOME_LOGO = <AiOutlineHome style={{ marginBottom: '2px' }} />;
export const ABOUT_LOGO = <AiOutlineUser style={{ marginBottom: '2px' }} />;
export const WORK_LOGO = <HiScissors style={{ marginBottom: '2px' }} />;
export const APPOINTMENT_LOGO = (
  <HiClipboardList style={{ marginBottom: '2px' }} />
);
