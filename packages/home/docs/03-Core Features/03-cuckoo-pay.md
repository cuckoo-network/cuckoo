# Cuckoo Pay

**Decentralizing AI economically**

> Cuckoo Pay will **NOT** be included in the initial release of mainnet.

Cuckoo Pay demo mode is now available at https://payton.so/o/demo. Payton is still a work in progress. We are adding pay-in, payout, and team management features. However, here is a demo of what we are working with the company network3 to pilot the crypto checkout use case.

#### Getting Started

Upon logging in, you'll be greeted with the **Home** dashboard, presenting a snapshot of your organization's recent activities. This dashboard serves as your command center, offering insights and quick access to various functionalities.

<img src="https://tp-misc.b-cdn.net/blockeden/payton-demo-1.png" className="border" />

<img src="https://tp-misc.b-cdn.net/blockeden/payton-demo-2-2.png" className="border" />

Navigate to the **Products** section via the side navigation to discover a list of previously registered products. Here, you can effortlessly manage your offerings, setting names and prices to align with your business strategy.

<img src="https://tp-misc.b-cdn.net/blockeden/payton-demo-3.png" className="border" />

#### The Checkout Experience

After tailoring your product details, the **Checkout** button will lead you to the next step. The checkout page is where the magic happens: add your contact information, select your preferred cryptocurrency, and send tokens to the designated address. It's as simple as that.

<img src="https://tp-misc.b-cdn.net/blockeden/payton-demo-4.png" className="border" />

Following payment confirmation, the checkout session concludes, smoothly transitioning customers to their next interaction.

<img src="https://tp-misc.b-cdn.net/blockeden/payton-demo-5.png" className="border" />

### Advanced Integration: Listening for Payment Success

For developers aiming to integrate payment notifications, the **Developers** tab is your go-to. Input your webhook URL to receive HTTP POST requests upon successful transactions, keeping your server in the loop.

<img src="https://tp-misc.b-cdn.net/blockeden/payton-demo-6.png" className="border" />

The request body follows a structured format, ensuring you receive pertinent information without hassle:

```typescript
interface IPaytonWebhook {
  id: string;
  type: "invoice.payment_succeeded";
  data: {
    customerEmail: string;
    planId: string;
  };
}
```

## Wrapping Up

Our demo offers just a glimpse into the efficient, user-friendly world of crypto checkouts facilitated by Payton. We're on a mission to refine and enhance this product, making digital payments more accessible than ever. Keep an eye on our [Twitter](https://twitter.com/payton_soul) for the latest updates and breakthroughs in crypto payment solutions.
