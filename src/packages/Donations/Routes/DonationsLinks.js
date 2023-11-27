import Iconify from "../../../shared/components/Iconify";
const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

export const DonationsLinks=[
    {
        title: 'Donations',
        path:"/donations",
        icon: getIcon('streamline:blood-bag-donation-solid'),
    }
]