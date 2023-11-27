import Iconify from "../../../shared/components/Iconify";
const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

export const DonorsLinks=[
    {
        title: 'Donors',
        path:"/donors",
        icon: getIcon('streamline:give-gift-solid'),
    }
]