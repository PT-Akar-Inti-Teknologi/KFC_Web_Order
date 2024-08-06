import { MobileMenuModel } from "./MobileMenu.types";

export const mobileMenuData: MobileMenuModel[] = [
    {
        title: "HOME",
        isParent: false,
        children: [],
        to: "/"
    },
    {
        title: "ORDER",
        isParent: true,
        to: "",
        children: [
            {
                title: "Services",
                isParent: true,
                children: [
                    {
                        title: "Dine-in",
                        isParent: false,
                        children: [],
                        to: "?services=dine-in"
                    },
                    {
                        title: "Take Away",
                        isParent: false,
                        children: [],
                        to: "?services=take-away"
                    },
                    {
                        title: "Delivery",
                        isParent: false,
                        children: [],
                        to: "?services=delivery"
                    },

                    {
                        title: "Drive-Thru",
                        isParent: false,
                        children: [],
                        to: "?services=drive-thru"
                    },
                    {
                        title: "Catering",
                        isParent: false,
                        children: [],
                        to: "?services=catering"
                    },
                    {
                        title: "Catering",
                        isParent: false,
                        children: [],
                        to: "?services=catering"
                    },
                    {
                        title: "B'day Party",
                        isParent: false,
                        children: [],
                        to: "?services=birthday-party"
                    },
                ]
            },
            {
                title: "Menu Category",
                isParent: false,
                children: []
            },
            {
                title: "My Voucher",
                isParent: false,
                children: []
            },
            {
                title: "Account",
                isParent: false,
                children: []
            }
        ]
    },
    {
        title: "KIDS",
        isParent: true,
        children: [],
        to: "",
    },
    {
        title: "AUTO MOTIVE",
        isParent: true,
        to: "",
        children: []
    },
    {
        title: "CORPORATE",
        isParent: true,
        to: "",
        children: []
    },
    {
        title: "EVENT",
        isParent: false,
        to: "/event",
        children: []
    },
    {
        title: "STORE",
        isParent: false,
        to: "/store",
        children: []
    },
    {
        title: "CAREER",
        isParent: false,
        to: "/career",
        children: []
    },
    {
        title: "CONTACT US",
        isParent: false,
        to: "/contact-us",
        children: []
    },
]