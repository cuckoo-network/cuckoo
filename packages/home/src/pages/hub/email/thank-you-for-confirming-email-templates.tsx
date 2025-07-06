
import React from 'react';
import Layout from '@theme/Layout';

function ThankYouForConfirmingEmailTemplates() {
  return (
    <Layout
      title="Thank You for Confirming Email Templates"
      description="A collection of over 30 thank you for confirming email templates for various scenarios.">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1>Thank You for Confirming Email Templates</h1>
            <p>
              Confirmation emails are a crucial part of building and maintaining relationships with your customers and partners.
              They provide reassurance that an action has been completed successfully. Here are over 30 templates for various
              scenarios, such as subscription sign-ups, webinar registrations, and e-commerce purchases.
            </p>

            <h2>General Confirmation Template</h2>
            <pre>
              {`
Subject: Thank you for your confirmation!

Hi [Name],

Thank you for confirming your [Action]. We're excited to have you on board.

You can find more information about [Product/Service] here: [Link]

If you have any questions, please don't hesitate to contact us.

Thanks,
The [Your Company] Team
              `}
            </pre>

            <h2>Subscription Confirmation Template</h2>
            <pre>
              {`
Subject: You're subscribed!

Hi [Name],

Thanks for subscribing to our newsletter. You're all set to receive updates, news, and special offers from us.

As a thank you, here's a [Discount/Freebie] for your next purchase: [Code]

Welcome to the community!

Best,
The [Your Company] Team
              `}
            </pre>

            <h2>Webinar Registration Confirmation Template</h2>
            <pre>
              {`
Subject: You're registered for our webinar!

Hi [Name],

Thanks for registering for our upcoming webinar, [Webinar Title].

Here are the details:
Date: [Date]
Time: [Time]
Link: [Webinar Link]

We'll send you a reminder a day before the event. We look forward to seeing you there!

Cheers,
The [Your Company] Team
              `}
            </pre>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ThankYouForConfirmingEmailTemplates;
