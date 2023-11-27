import Iconify from "../../../shared/components/Iconify";

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

export const HomeLinks=[
    {
        title: 'Home',
        path: '/home',
        icon: getIcon('ic:sharp-home'),
    },
]
