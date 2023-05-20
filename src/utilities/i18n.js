import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

i18next
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    connectWallet: 'Connect Wallet',
                    secure: 'Secure',
                    voting: 'Voting',
                    solution: 'Solutions in Sri Lanka',
                    learMore: 'Learn More',
                    contactUs: 'Contact Us',
                    campaign: 'Campaign',
                    currentlyOpen: 'Currently Open',
                    currentCampaignBalance: 'Current Campaign Balance',
                    yourContributions: 'Your Contributions',
                    becomeStakeholder: 'Hey, when you contribute upto 1 ether you become a stakeholder',
                    contribute: 'Contribute',
                    propose: 'Propose',
                    createCampaign: 'Create Campaign',
                    title: 'Title',
                    egEth: 'eg: 1 ETH',
                    benificiaryAddress: 'Benificiary Address',
                    description: 'Description',
                    submitCampaign: 'Submit Campaign',
                    all: 'All',
                    open: 'Open',
                    closed: 'Closed',
                    createdBy: 'Created By',
                    title: 'Title',
                    expires: 'Expires',
                    action: 'Action',
                    view: 'View',


                },
            },
            si: {
                translation: {
                    connectWallet: 'Wallet සම්බන්ධ කරන්න',
                    secure: 'ආරක්ෂිත',
                    voting: 'ඡන්දයක්',
                    solution: 'ශ්‍රී ලංකාවේ විසඳුම්',
                    learMore: 'තවත් තොරතුරු ලබා ගන්න',
                    contactUs: 'අප අමතන්න',
                    campaign: 'ව්‍යාපාරය',
                    currentlyOpen: 'දැනට විවෘත කර ඇත',
                    currentCampaignBalance: 'වත්මන් ප්‍රචාරක ශේෂය',
                    yourContributions: 'ඔබගේ දායකත්වය',
                    becomeStakeholder: 'හේයි, ඔබ ඊතර් 1ක් දක්වා දායක වූ විට ඔබ කොටස්කරුවෙකු බවට පත් වේ',
                    contribute: 'දායක වන්න',
                    propose: 'යෝජනා කරන්න',
                    createCampaign: 'ව්‍යාපාරයක් සාදන්න',
                    title: 'ශීර්ෂය',
                    egEth: 'උදා 1 Eth',
                    benificiaryAddress: 'ප්රතිලාභි ලිපිනය',
                    description: 'විස්තරය',
                    submitCampaign: 'ව්‍යාපාරය ඉදිරිපත් කරන්න',
                    all: 'සියලුම',
                    open: 'විවෘත',
                    closed: 'වසා ඇත',
                    createdBy: 'විසින් සාදන ලදි',
                    title: 'ශීර්ෂය',
                    expires: 'කල් ඉකුත් වීම',
                    action: 'ක්‍රියාකාරකම',
                    view: 'පෙන්වන්න',


                },
            },
        },
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18next;