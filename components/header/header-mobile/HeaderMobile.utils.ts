export const headerMobileMenuData = [
    {
        title: "HOME",
        isParent: false,
        children: [],
        to: "/"
    },
    {
        title: "ORDER",
        isParent: true,
        to: null,
        children: [
            {
                title: "Services",
                isParent: true,
                children: [
                    {
                        title: "Dine-in",
                        to: "?services=dine-in"
                    },
                    {
                        title: "Take Away",
                        to: "?services=take-away"
                    },
                    {
                        title: "Delivery",
                        to: "?services=delivery"
                    },

                    {
                        title: "Drive-Thru",
                        to: "?services=drive-thru"
                    },
                    {
                        title: "Catering",
                        to: "?services=catering"
                    },
                    {
                        title: "Catering",
                        to: "?services=catering"
                    },
                    {
                        title: "B'day Party",
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
        to: null,
    },
    {
        title: "AUTO MOTIVE",
        isParent: true,
        to: null,
        children: []
    },
    {
        title: "CORPORATE",
        isParent: true,
        to: null,
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
        title: "CONTACT_US",
        isParent: false,
        to: "/contact-us",
        children: []
    },
]