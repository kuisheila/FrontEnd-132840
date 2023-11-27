import Iconify from "../../../shared/components/Iconify";

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

export const ChildrensHomeLinks=[
    {
        title: 'Childrens Home',
        path: '/childrens-home',
        icon: getIcon('fa6-solid:children'),
    },
]
