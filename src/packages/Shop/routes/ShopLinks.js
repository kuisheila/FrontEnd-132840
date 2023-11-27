import Iconify from "../../../shared/components/Iconify";

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

export const ShopLinks=[
    {
        title: 'Shop',
        path: '/shop',
        icon: getIcon('ic:sharp-home'),
    },
]
