const docView = {
  slug: 'doc-view',
  name: 'Doc View: All Document Reader',
  kind: 'App',
  category: 'Document reader',
  tagline: 'Open, read, scan, and convert your documents.',
  description:
    'A handy Android document reader to browse, view, scan, convert, and share supported files, with document processing designed to stay on your device.',
  platforms: ['Android'],
  status: 'Coming soon',
  artwork: 'tide',
  symbol: 'file-text-thin',
  ornament: 'file-pdf-thin',
  label: 'YOUR DOCUMENTS, IN VIEW',
  featured: true,
  featuresTitle: 'Your documents.',
  featuresSubtitle: 'Ready to explore.',
  featuresDescription: 'Open, browse, scan, convert and share your supported files from one place.',
  features: [
    {
      title: 'Read supported documents',
      description: 'Open and view PDF, Microsoft Word, Excel, PowerPoint, text and other compatible document formats.',
    },
    {
      title: 'Browse and revisit files',
      description: 'Find documents with Android file access tools and return to recently opened files.',
    },
    {
      title: 'Scan with your camera',
      description: 'Capture document pages using your device camera and process scans on your device.',
    },
    {
      title: 'Convert documents locally',
      description: 'Convert supported document formats on your device and save the result locally or to a destination you choose.',
    },
    {
      title: 'Share or export files',
      description: 'Send a selected document or converted file through Android sharing to an app or recipient you choose.',
    },
    {
      title: 'Keep document work on-device',
      description: 'Document viewing, scanning and supported conversions are designed to happen locally rather than through a cloud document-storage service.',
    },
  ],
  privacyPolicyLastUpdated: 'November 25, 2026',
  privacyPolicyIntro: [
    'Welcome to Doc View: All Document Reader ("App", "we", "our", or "us"), developed and published by Craftline Interactive. Effective Date: November 25, 2026.',
    'We respect your privacy and are committed to protecting your information. This Privacy Policy explains how our application accesses, uses, processes, stores and shares information when you use Doc View.',
    'Doc View is an Android document-reading and management application that allows users to open, view, scan, convert and share supported documents.',
    'Our application is designed to process documents locally on your device. We do not operate a cloud service that receives or stores the contents of your documents.',
  ],
  privacyPolicy: [
    {
      title: 'Introduction',
      paragraphs: ['This Privacy Policy explains:'],
      items: [
        'What information the application accesses.',
        'How documents and scanned files are processed.',
        'How application preferences and recent document history are handled.',
        'How advertising and in-app purchases work.',
        'What information may be collected by third-party services.',
        'How you can manage your privacy and information.',
      ],
      closingParagraphs: ['Please read this policy carefully before using the application.'],
    },
    {
      title: 'Information We Access and Process',
      subsections: [
        {
          title: 'Documents and Files',
          paragraphs: [
            'Doc View allows users to open and view supported files stored on their Android devices. Supported document formats may include PDF documents, Microsoft Word documents, Microsoft Excel spreadsheets, Microsoft PowerPoint presentations, text documents, and other compatible document formats.',
            'When you select or open a document, the application accesses the file to provide its document-viewing functionality.',
          ],
        },
        {
          title: 'Local Document Processing',
          paragraphs: [
            'Document viewing, reading and supported conversion operations are performed locally on your device.',
            'We do not intentionally upload, transmit or store the contents of your documents on servers operated by Craftline Interactive.',
            'Your original documents remain in their existing storage locations unless you explicitly choose to share, convert, export, move or otherwise modify them using an available feature.',
          ],
        },
        {
          title: 'File Names and Recent Document History',
          paragraphs: ['The application may maintain a local record of recently opened documents to make it easier for you to access them again. Depending on the functionality used, this information may include:'],
          items: [
            'Document names.',
            'File references or storage locations.',
            'Recently opened document information.',
            'Application-related document preferences.',
          ],
          closingParagraphs: [
            'This information is stored locally on your device and is not intentionally transmitted to our servers.',
            'Documents and their contents are not uploaded to a remote history service operated by us.',
          ],
        },
        {
          title: 'Camera and Document Scanning',
          paragraphs: [
            "Doc View provides a document-scanning feature that may require access to your device's camera. Camera access is requested when you choose to use the document-scanning functionality.",
            'The camera is used to capture document pages or images for scanning. Scanned content is processed locally on your device. We do not intentionally upload captured document images or scanned document contents to servers operated by Craftline Interactive.',
            'Temporary image data may be used during the scanning and document-generation process. Scanned output may be saved to a location selected or authorized by you.',
            'You can manage or revoke camera permission through your Android device settings. Revoking camera permission will prevent the scanning feature from functioning.',
          ],
        },
        {
          title: 'Device and Technical Information',
          paragraphs: ['The application and its integrated third-party services may access or process limited technical information required for application functionality and advertising. Depending on the service and device configuration, this may include:'],
          items: [
            'Android operating system version.',
            'Application version.',
            'Device model and technical characteristics.',
            'IP address.',
            'Device or advertising identifiers.',
            'Application interaction information.',
            'Advertising-related information.',
            'Technical diagnostic and performance information.',
          ],
          closingParagraphs: ['Certain information may be collected automatically by third-party services, as described in this policy.'],
        },
      ],
    },
    {
      title: 'File Access and Storage Permissions',
      paragraphs: [
        "Doc View may use Android's file-access mechanisms to provide document browsing and management functionality. Depending on your device, application version and permissions granted, these mechanisms may include:",
      ],
      subsections: [
        {
          title: 'Android Storage Access Framework (File Picker)',
          paragraphs: [
            "The application may use Android's system-provided file picker to let you select individual documents or folders.",
            'When you select a document, Android grants the application the required access to that selected file or location.',
          ],
        },
        {
          title: 'All Files Access',
          paragraphs: [
            'The application may also request broader storage access through Android\'s special All Files Access permission, where enabled.',
            'This permission supports document discovery and browsing functionality across accessible shared storage locations.',
            "We use file access only to provide the application's document-related features, such as opening, viewing and managing supported files.",
            'We do not intentionally scan or upload unrelated personal documents to our servers.',
            'You can manage or revoke applicable file permissions through Android settings. Restricting file access may affect document browsing and other file-related functionality.',
          ],
        },
      ],
    },
    {
      title: 'Document Conversion and Sharing',
      subsections: [
        {
          title: 'Document Conversion',
          paragraphs: [
            'The application provides supported document conversion functionality. Conversion operations are performed locally on your device.',
            'Documents selected for conversion are processed within the application, and resulting files are saved locally or to a destination selected by you.',
            'We do not intentionally upload document contents to Craftline Interactive servers for conversion.',
          ],
        },
        {
          title: 'Document Sharing',
          paragraphs: [
            "You may choose to share documents or converted files using Android's sharing functionality. When you initiate sharing, the selected document may be transferred to another application, service or recipient chosen by you.",
            'Examples include email applications, messaging applications and cloud-storage applications installed on your device.',
            'Once a document is shared, the handling of that document is governed by the privacy practices of the receiving application or service. We do not control how third-party applications process information you choose to share with them.',
          ],
        },
      ],
    },
    {
      title: 'Local Data Storage',
      paragraphs: ['Certain application information may be stored locally on your device. This may include:'],
      items: [
        'Application preferences and settings.',
        'Recent document history.',
        'Document references and related metadata.',
        'Temporary document-rendering information.',
        'Scanned document output.',
        'Converted documents.',
        'Other information necessary for application functionality.',
      ],
      closingParagraphs: [
        'This information is maintained locally rather than through a document-storage server operated by us.',
        'You can remove application data through the Android application settings. Documents saved in shared storage may remain on your device even after application data is cleared or the application is uninstalled.',
      ],
    },
    {
      title: 'Advertising and Google AdMob',
      paragraphs: [
        'Doc View uses Google AdMob to display advertisements. Google AdMob is an advertising service operated by Google LLC.',
        'To provide, measure and improve advertising services, the Google Mobile Ads SDK integrated into the application may collect or process certain information, depending on your device settings, applicable consent requirements and the advertising features enabled. This information may include:',
      ],
      items: [
        'IP address.',
        'Android Advertising ID.',
        'App Set ID and other device identifiers, where applicable.',
        'Advertisement views and interactions.',
        'Application interaction information.',
        'Device and application information.',
        'Diagnostic and performance information.',
      ],
      closingParagraphs: [
        'Google may use this information for purposes including delivering advertisements; advertising measurement and reporting; personalized or non-personalized advertising, as applicable; fraud prevention and security; and advertising performance and service improvement.',
        "Advertising information may be transmitted to and processed by Google and its advertising partners according to their applicable privacy policies and terms. We do not intentionally provide the contents of your documents, scanned pages or converted files to advertisers.",
        'You may have options to manage advertising personalization and advertising identifiers through your Android device settings and applicable privacy controls.',
        'Google Privacy Policy: https://policies.google.com/privacy',
        'Google Advertising Technologies: https://policies.google.com/technologies/ads',
        'Google Mobile Ads SDK Data Disclosure: https://developers.google.com/admob/android/privacy/play-data-disclosure',
      ],
    },
    {
      title: 'In-App Purchases and Payments',
      paragraphs: [
        'Doc View may offer optional paid features or subscriptions through Google Play Billing. When you make an in-app purchase, the transaction is handled by Google Play.',
        'Google may process information necessary to complete and manage your purchase, including payment-related information and transaction details. The application may receive relevant purchase information, such as product identifiers, purchase status and entitlement information, to provide the features you have purchased.',
        "Craftline Interactive does not directly collect or store your payment card details through the application's purchase interface. Payment processing, transaction security, refunds and purchase management are subject to Google's applicable terms and policies.",
        'Google Payments Privacy Notice: https://payments.google.com/payments/apis-secure/get_legal_document?ldo=0&ldt=privacy',
        'Google Privacy Policy: https://policies.google.com/privacy',
      ],
    },
    {
      title: 'Analytics and Crash Reporting',
      paragraphs: [
        'Doc View does not currently integrate separate third-party analytics or crash-reporting SDKs.',
        "We do not intentionally use separate analytics services to track individual users' document-viewing activities. However, Google AdMob may process advertising-related interaction, diagnostic and performance information as described in the Advertising and Google AdMob section.",
        "Google Play and Android may also process information independently in accordance with their own privacy practices.",
      ],
    },
    {
      title: 'How We Use Information',
      paragraphs: ['Information accessed or processed by the application is used for purposes such as:'],
      items: [
        'Opening and displaying documents.',
        'Scanning documents using the device camera.',
        'Converting supported documents.',
        'Maintaining recently opened document history.',
        'Providing document-sharing functionality.',
        'Saving application preferences.',
        'Managing purchases and paid application features.',
        'Displaying advertisements.',
        'Maintaining application security and functionality.',
        'Responding to user support requests.',
      ],
      closingParagraphs: [
        'We do not sell document contents or scanned document images.',
        "We do not intentionally use users' documents for advertising or targeted advertising purposes.",
      ],
    },
    {
      title: 'Information Sharing and Disclosure',
      paragraphs: [
        "Craftline Interactive does not sell or rent users' personal information or document contents. Information may be shared or processed in the following circumstances:",
      ],
      subsections: [
        {
          title: 'Advertising Services',
          paragraphs: ['Google AdMob may receive and process device, advertising, interaction and technical information to provide advertising services.'],
        },
        {
          title: 'Payment Services',
          paragraphs: ['Google Play processes information necessary to complete and manage in-app purchases and subscriptions.'],
        },
        {
          title: 'User-Directed Sharing',
          paragraphs: ["If you choose to share a document using Android's sharing functionality, the selected file is transferred to the application, service or recipient you choose."],
        },
        {
          title: 'Legal Requirements and Protection',
          paragraphs: [
            'Information may be disclosed where required by applicable laws, legal processes or valid governmental requests.',
            'Information may be processed or disclosed when reasonably necessary to protect the security, rights or integrity of the application, its users or its developer.',
            'We do not intentionally disclose your document contents to advertising providers or payment processors.',
          ],
        },
      ],
    },
    {
      title: 'Data Retention and Deletion',
      paragraphs: [
        'Document contents, scanned files, converted documents and recent document history are intended to remain on your device.',
        'We do not maintain a server-side database of document contents under the local-processing design described in this policy.',
        'Information stored locally remains on your device until you remove it through the relevant application or Android storage controls. Documents saved to shared device storage may remain there after the application is uninstalled.',
        "Information independently processed by Google AdMob or Google Play is subject to the relevant provider's data-retention and deletion policies.",
        'If you contact us through email, we may retain your correspondence for as long as reasonably necessary to address your request or meet applicable legal obligations.',
      ],
    },
    {
      title: 'Data Security',
      paragraphs: ['We take reasonable measures to protect information handled by the application. Our privacy and security approach includes:'],
      items: [
        'Local processing of document contents.',
        'Limiting file access to application functionality.',
        'Requesting camera access when required for scanning.',
        'Avoiding unnecessary transmission of document contents.',
        "Protecting application preferences and local application data using Android's available security mechanisms.",
        'Using integrated third-party services according to their applicable security practices.',
      ],
      closingParagraphs: [
        'However, no software application, device or electronic storage method can guarantee absolute security.',
        'Users are encouraged to keep their devices protected with screen locks, operating-system updates and other appropriate security measures.',
      ],
    },
    {
      title: "Children's Privacy",
      paragraphs: [
        'Doc View is a general-purpose document-reading and management application. It is not specifically designed to collect personal information from children.',
        'The application does not require account registration or personal details to provide its basic document-viewing functionality. We do not knowingly request personal information from children for account creation.',
        "If we become aware that information has been collected in a manner that violates applicable children's privacy laws, we will take reasonable steps to address the issue.",
      ],
    },
    {
      title: 'Your Privacy Choices and Rights',
      paragraphs: ['Depending on your location and applicable privacy laws, you may have rights regarding your personal information. These rights may include:'],
      items: [
        'Requesting information about personal data processed by us.',
        'Requesting correction of inaccurate personal information.',
        'Requesting deletion of personal information where applicable.',
        'Withdrawing consent where processing is based on consent.',
        'Managing advertising preferences and identifiers.',
        'Revoking application permissions through Android settings.',
        'Contacting us with privacy-related questions or concerns.',
      ],
      closingParagraphs: [
        "You may manage file and camera permissions through your device settings. For information processed independently by Google, you may need to use Google's privacy and account-management controls.",
        'To submit a privacy-related request to Craftline Interactive, use the contact information provided in this policy.',
      ],
    },
    {
      title: 'Third-Party Applications and Services',
      paragraphs: [
        'The application may interact with other applications and services installed on your device through Android system functionality. Examples include:',
      ],
      items: [
        'Google AdMob.',
        'Google Play Billing.',
        'Android system file picker.',
        'Android camera functionality.',
        'External applications used for document sharing.',
      ],
      closingParagraphs: [
        'Third-party providers operate independently and maintain their own privacy policies, terms and data-handling practices. Craftline Interactive is not responsible for the independent privacy practices or security of third-party applications and services.',
        'We recommend reviewing their policies before sharing information with them.',
      ],
    },
    {
      title: 'International Data Processing',
      paragraphs: [
        'Doc View may be available to users in multiple countries.',
        "Information processed by third-party providers, including Google, may be transferred to and processed in countries other than your country of residence. Such processing is governed by the applicable provider's privacy practices, contractual commitments and applicable data protection requirements.",
      ],
    },
    {
      title: 'Changes to This Privacy Policy',
      paragraphs: ['We may update this Privacy Policy from time to time to reflect changes to:'],
      items: [
        'Application features and functionality.',
        'Advertising and payment services.',
        'Data processing practices.',
        'Third-party integrations.',
        'Applicable privacy laws and regulations.',
      ],
      closingParagraphs: [
        'When changes are made, the revised policy will be published with an updated effective date or last-updated date.',
        "Users are encouraged to review this page periodically to remain informed about the application's privacy practices.",
      ],
    },
    {
      title: 'Contact Information',
      paragraphs: [
        "If you have any questions, requests or concerns regarding this Privacy Policy or the application's privacy practices, please contact us.",
        'Developer / Publisher: Craftline Interactive',
        'Application: Doc View: All Document Reader',
        'Email: craftlineinteractive@gmail.com',
        'We will make reasonable efforts to review and respond to privacy-related inquiries.',
      ],
    },
  ],
  termsOfUseLastUpdated: 'November 25, 2026',
  termsOfUseIntro: ['Effective Date: November 25, 2026.'],
  termsOfUse: [
    {
      title: 'Acceptance of Terms',
      paragraphs: [
        'Welcome to Doc View: All Document Reader ("App", "Application", "we", "our", or "us"), developed and published by Craftline Interactive.',
        'These Terms of Use govern your access to and use of the Doc View application and its available features.',
        'By downloading, installing, accessing or using the Application, you agree to comply with these Terms of Use.',
        'If you do not agree with any part of these Terms, please discontinue using the Application and uninstall it from your device.',
        'We may update these Terms from time to time. Continued use of the Application after updated Terms become effective constitutes acceptance of the revised Terms, subject to applicable law.',
      ],
    },
    {
      title: 'Description of the Application',
      paragraphs: [
        'Doc View is a document-reading and management application designed to help users work with supported documents on Android devices.',
        'Depending on the version of the Application and available functionality, features may include:',
      ],
      items: [
        'Opening and reading PDF documents.',
        'Viewing supported Microsoft Word documents.',
        'Viewing Excel spreadsheets.',
        'Viewing PowerPoint presentations.',
        'Opening supported text and other document formats.',
        'Scanning documents using the device camera.',
        'Converting supported document formats.',
        'Managing and accessing recently opened documents.',
        'Sharing documents through Android sharing functionality.',
        'Saving or exporting supported document files.',
        'Accessing optional paid features through in-app purchases.',
      ],
      closingParagraphs: ['Available features and supported document formats may change as the Application is updated.'],
    },
    {
      title: 'Eligibility and User Responsibilities',
      paragraphs: [
        'You must have the legal capacity to agree to these Terms under the laws applicable to you.',
        'If you are not legally able to enter into a binding agreement, you may use the Application only with the involvement and permission of your parent or legal guardian, where required by applicable law.',
        'By using the Application, you agree that:',
      ],
      items: [
        'You will use the Application only for lawful purposes.',
        'You will provide appropriate permissions required for the features you choose to use.',
        'You are responsible for the documents and files you open, scan, convert or share.',
        "You will not use the Application to violate another person's rights.",
        'You will not attempt to disrupt, damage or compromise the Application.',
        'You will comply with applicable laws and regulations.',
      ],
    },
    {
      title: 'Document Access and Processing',
      paragraphs: [
        'Doc View provides functionality for accessing and processing supported documents stored on your device.',
        "Documents are processed locally on your device according to the Application's available functionality.",
        'Craftline Interactive does not operate a cloud document-storage service for the standard document-reading, scanning or conversion features described in the accompanying Privacy Policy.',
        'You acknowledge that:',
      ],
      items: [
        'You are responsible for the documents you select and access.',
        'The Application can process only supported file formats and structures.',
        'Some documents may not display correctly because of their formatting, encryption, corruption, size or unsupported features.',
        'Certain files may require a compatible application, password or additional permission to access.',
        'Document rendering and conversion results may vary depending on your device and the original file.',
      ],
      closingParagraphs: ['You are responsible for maintaining copies of important documents before performing operations that may modify or replace files.'],
    },
    {
      title: 'Document Scanning',
      paragraphs: [
        "The Application may provide document-scanning functionality using your device's camera.",
        'By using this feature, you authorize the Application to access your camera when permission is required.',
        'You agree that:',
      ],
      items: [
        'You will obtain appropriate permission before scanning documents belonging to other individuals or organizations.',
        'You will not use scanning functionality for unlawful surveillance, forgery, fraud or other unauthorized activities.',
        'You are responsible for ensuring that scanned documents are accurate and complete.',
        'You should review scanned output before saving, sharing or using it for official purposes.',
      ],
      closingParagraphs: [
        'Scanning quality may depend on lighting, camera quality, document condition and device capabilities.',
        'We do not guarantee that scanned documents will always reproduce the original document perfectly.',
      ],
    },
    {
      title: 'Document Conversion and Export',
      paragraphs: [
        'The Application may provide conversion and export functionality for supported document formats.',
        'You acknowledge that document conversion can cause changes in:',
      ],
      items: [
        'Formatting and layout.',
        'Fonts and text positioning.',
        'Images and graphics.',
        'Tables and page structures.',
        'Hyperlinks and embedded elements.',
        'Other document-specific features.',
      ],
      closingParagraphs: [
        'Conversion results may differ from the original document.',
        'We do not guarantee complete formatting preservation, universal compatibility or successful conversion of every file.',
        'You are responsible for reviewing converted documents before using, distributing or submitting them.',
      ],
    },
    {
      title: 'Document Sharing',
      paragraphs: [
        "Doc View may allow you to share documents using Android's system sharing functionality.",
        'When you choose to share a document, you are responsible for selecting the correct recipient and destination application.',
        'You understand that:',
      ],
      items: [
        'Shared documents may leave the private storage environment of the Application.',
        'Receiving applications and services operate independently.',
        'We do not control how third parties store, process or distribute files you choose to share.',
        'You are responsible for ensuring that you have the necessary rights to share a document.',
      ],
      closingParagraphs: ['Craftline Interactive is not responsible for the handling of files by third-party applications after you initiate sharing.'],
    },
    {
      title: 'User Content and Intellectual Property',
      paragraphs: [
        'You retain ownership of documents, files, images and other materials that you create or lawfully access.',
        'Using Doc View does not transfer ownership of your documents or grant Craftline Interactive any ownership rights over your personal content.',
        'You are responsible for ensuring that you have the necessary rights, permissions or licenses to open, reproduce, convert, modify or distribute any documents through the Application.',
        'The Application itself, including its software, design, branding, graphics, interface elements and original content, is owned by or licensed to Craftline Interactive and is protected by applicable intellectual property laws.',
        'You may not:',
      ],
      items: [
        'Copy or redistribute the Application for unauthorized commercial purposes.',
        'Modify, reproduce or create derivative works of our proprietary application components without permission.',
        'Remove or alter copyright, trademark or other proprietary notices.',
        'Use our branding or materials in a misleading or unauthorized manner.',
      ],
      closingParagraphs: ['Nothing in these Terms transfers ownership of the Application or its intellectual property to you.'],
    },
    {
      title: 'Permitted and Prohibited Use',
      paragraphs: [
        'You may use Doc View for personal, educational, professional and other lawful document-related purposes.',
        'You agree not to use the Application to:',
      ],
      items: [
        'Access files or documents without authorization.',
        'Commit fraud, identity theft or other unlawful activities.',
        'Create, modify or distribute forged documents for fraudulent purposes.',
        'Violate copyright, trademark, privacy or other intellectual property rights.',
        'Distribute malicious software or harmful files.',
        'Attempt to reverse engineer, decompile or modify the Application except where such restrictions are prohibited by applicable law.',
        'Interfere with application functionality, security or performance.',
        'Circumvent advertisements, payment requirements or access restrictions through unauthorized methods.',
        "Exploit application vulnerabilities or interfere with other users' devices.",
      ],
      closingParagraphs: ['We reserve the right to take reasonable measures to protect the Application and its users against misuse, subject to applicable law.'],
    },
    {
      title: 'Advertisements',
      paragraphs: [
        'Doc View may display advertisements through Google AdMob.',
        'Advertisements help support the development, maintenance and availability of the Application.',
        'You acknowledge that:',
      ],
      items: [
        'Advertisements may appear in different areas of the Application.',
        'Advertising availability and content may depend on your location, device settings and advertising eligibility.',
        'Advertisements may be personalized or non-personalized depending on applicable consent and privacy settings.',
        'Advertising services may be provided by third-party advertising partners.',
      ],
      closingParagraphs: [
        'Craftline Interactive does not guarantee the availability, accuracy, suitability or reliability of third-party advertisements or the products and services promoted through them.',
        "Interactions with advertisers, including purchases or services obtained through advertisements, are your responsibility and are governed by the relevant third party's terms.",
      ],
    },
    {
      title: 'In-App Purchases and Paid Features',
      paragraphs: [
        'The Application may offer optional paid features, digital products or subscriptions through Google Play Billing.',
        'All purchases are subject to the applicable Google Play payment terms and conditions.',
        'By making an in-app purchase, you acknowledge that:',
      ],
      items: [
        'Payment transactions are processed through Google Play.',
        'Prices and available products may vary by country, currency, taxes and applicable regional pricing.',
        'Purchased features are provided according to the description displayed at the time of purchase.',
        'Certain paid features may require an active subscription or valid purchase entitlement.',
        'Your access to paid features may be affected by purchase status, refunds, chargebacks or subscription expiration.',
      ],
      subsections: [
        {
          title: 'Subscription Terms',
          paragraphs: ['Where recurring subscriptions are offered:'],
          items: [
            'Subscription duration, price and renewal frequency will be displayed before purchase.',
            'Subscriptions may renew automatically according to the selected plan unless cancelled before the applicable renewal date.',
            'You are responsible for managing and cancelling subscriptions through your Google Play account.',
            'Uninstalling the Application does not automatically cancel an active subscription.',
            'Access to subscription features may end when the subscription expires or is otherwise terminated.',
          ],
        },
        {
          title: 'Purchase Restoration',
          paragraphs: [
            'Where supported, you may restore eligible purchases using the same Google Play account used to complete the original transaction.',
            "Purchase restoration is subject to Google's purchase verification and entitlement requirements.",
          ],
        },
        {
          title: 'Refunds',
          paragraphs: [
            "Refund requests are handled according to Google Play's applicable refund policies and procedures.",
            'Craftline Interactive does not directly process or guarantee refunds for transactions handled by Google Play.',
            'For purchase-related assistance, you may contact Google Play Support or contact us using the email address provided in these Terms.',
          ],
        },
      ],
    },
    {
      title: 'Third-Party Services',
      paragraphs: ['The Application may use or interact with third-party services, including:'],
      items: [
        'Google AdMob for advertising.',
        'Google Play Billing for in-app purchases.',
        'Android system services for file access, scanning and document sharing.',
      ],
      closingParagraphs: [
        'These services are operated independently and are subject to their own terms, conditions and privacy policies.',
        'Your use of third-party services may require you to comply with additional terms imposed by their respective providers.',
        'Craftline Interactive does not control third-party services and is not responsible for their independent availability, performance, policies or practices.',
      ],
    },
    {
      title: 'Application Availability and Updates',
      paragraphs: [
        'We aim to maintain the functionality and availability of Doc View. However, we do not guarantee that the Application will always be uninterrupted, error-free or available on every device.',
        'We may:',
      ],
      items: [
        'Release new versions and updates.',
        'Add, modify or remove features.',
        'Improve performance and security.',
        'Discontinue support for certain Android versions or device configurations.',
        'Modify supported file formats.',
        'Temporarily restrict functionality for maintenance or technical reasons.',
      ],
      closingParagraphs: [
        'Some updates may be necessary to maintain compatibility, security or application functionality.',
        'You are responsible for installing updates made available through Google Play or other authorized distribution channels.',
      ],
    },
    {
      title: 'Disclaimer of Warranties',
      paragraphs: [
        'Doc View is provided on an "as is" and "as available" basis, to the extent permitted by applicable law.',
        'We do not warrant that:',
      ],
      items: [
        'The Application will work on every Android device.',
        'Every document format or file will be supported.',
        'Documents will always render exactly as originally created.',
        'All conversion or scanning results will be accurate.',
        'The Application will be continuously available without errors.',
        'All defects or technical issues will be corrected immediately.',
        "The Application will meet every user's specific requirements.",
      ],
      closingParagraphs: [
        'You use the Application at your own discretion and are responsible for verifying important document content, scanned results and converted files.',
        'Nothing in these Terms excludes warranties or rights that cannot legally be excluded under applicable law.',
      ],
    },
    {
      title: 'Limitation of Liability',
      paragraphs: [
        'To the maximum extent permitted by applicable law, Craftline Interactive will not be liable for indirect, incidental, special, consequential or punitive damages arising from the use of or inability to use the Application.',
        'This may include:',
      ],
      items: [
        'Loss of data or documents.',
        'Loss of business opportunities or profits.',
        'Loss resulting from inaccurate document conversion or scanning.',
        'Issues caused by unsupported or corrupted files.',
        'Problems arising from third-party applications or services.',
        'Unauthorized sharing of documents by users.',
        'Device issues unrelated to the Application.',
      ],
      closingParagraphs: [
        'You are responsible for keeping appropriate backups of important files.',
        'Nothing in these Terms limits or excludes liability where such limitation or exclusion is prohibited by applicable law, including liability that cannot legally be excluded.',
      ],
    },
    {
      title: 'Indemnification',
      paragraphs: [
        "To the extent permitted by applicable law, you agree to be responsible for losses, claims, liabilities and reasonable expenses arising from your unlawful use of the Application, your violation of these Terms, or your infringement of another person's rights.",
        'This provision does not apply to the extent that such losses or claims are caused by our own breach of applicable law or other conduct for which liability cannot legally be excluded.',
      ],
    },
    {
      title: 'Suspension and Termination',
      paragraphs: [
        'We may restrict or discontinue access to the Application or certain features where reasonably necessary for security, maintenance, legal compliance or prevention of misuse.',
        'You may stop using the Application at any time by uninstalling it from your device.',
        'Uninstalling the Application does not automatically cancel any active subscription or recurring payment. Subscription cancellation must be managed separately through Google Play.',
        'Sections concerning intellectual property, user responsibility, disclaimers, limitations of liability and other provisions that are intended to survive termination will continue to apply where permitted by law.',
      ],
    },
    {
      title: 'Privacy Policy',
      paragraphs: [
        'Your use of Doc View is also governed by our Privacy Policy.',
        'The Privacy Policy explains how the Application accesses and handles documents, local application information, advertising-related information and purchase-related information.',
        'You can review the Privacy Policy through the relevant section of the Application or through our official published privacy-policy webpage.',
        'Privacy Policy URL: /app/doc-view/privacy-policy',
      ],
    },
    {
      title: 'Changes to These Terms',
      paragraphs: [
        'We may revise these Terms of Use from time to time to reflect changes in the Application, available features, third-party integrations, business practices or applicable legal requirements.',
        'Revised Terms will be published with an updated effective date or last-updated date.',
        'Where required by applicable law, we will provide notice of material changes or obtain additional consent.',
        'We encourage you to review these Terms periodically.',
      ],
    },
    {
      title: 'Governing Law and Disputes',
      paragraphs: [
        'These Terms are governed by the laws of India, subject to mandatory consumer-protection and other applicable laws in the country where you reside.',
        'Any dispute relating to the Application or these Terms will be handled by courts or other competent authorities having jurisdiction under applicable law.',
        'Nothing in this section prevents you from exercising consumer rights or seeking remedies available under mandatory laws applicable to you.',
      ],
    },
    {
      title: 'Severability',
      paragraphs: [
        'If any provision of these Terms is found to be invalid, unlawful or unenforceable under applicable law, the remaining provisions will continue to apply to the extent legally permitted.',
        'The invalid provision will be interpreted or limited to the minimum extent necessary to make it enforceable, where legally possible.',
      ],
    },
    {
      title: 'Entire Agreement',
      paragraphs: [
        'These Terms, together with the Privacy Policy and any additional terms presented for specific features or purchases, constitute the agreement governing your use of Doc View.',
        'They replace any previous general terms relating to the same subject matter, to the extent permitted by law.',
      ],
    },
    {
      title: 'Contact Information',
      paragraphs: [
        'If you have questions, concerns or requests regarding these Terms of Use, please contact us:',
        'Developer / Publisher: Craftline Interactive',
        'Application: Doc View: All Document Reader',
        'Email: craftlineinteractive@gmail.com',
        'We will make reasonable efforts to review and respond to user inquiries.',
      ],
    },
  ],
}

export default docView
