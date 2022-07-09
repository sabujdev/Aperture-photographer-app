import React from "react";

const Blogs = () => {
  return (
    <div className="bg-[#021b29] px-3 py-20">
      <div className="container mx-auto flex flex-col md:flex-row gap-7 justify-between text-white">
        <div className="p-5 bg-[#0a2e43] rounded-lg shadow-lg flex-1">
          <h2 className="text-xl mb-3">
            What is the difference between Authentication and Authorization?
          </h2>
          <p className="text-slate-400">
            <strong>Authentication</strong> is the process of identifying users
            and validating who they claim to be. One of the most common and
            obvious factors to authenticate identity is a password. If the user
            name matches the password credential, it means the identity is
            valid, and the system grants access to the user.
          </p>
          <p className="text-slate-400">
            <strong>Authorization</strong> happens after a user’s identity has
            been successfully authenticated. It is about offering full or
            partial access rights to resources like database, funds, and other
            critical information to get the job done.
          </p>
        </div>
        <div className="p-5 bg-[#0a2e43] rounded-lg shadow-lg flex-1">
          <h2 className="text-xl mb-3">
            Why are you using firebase? What other options do you have to
            implement authentication?
          </h2>
          <p className="text-slate-400">
            I do use firebase for implementing authentication system in the
            application. Firebase is a service of google. Since, authentication
            means the transaction of very important data like email, phone,
            password, credit card info, so i chose google to handle these.
          </p>
          <p className="text-slate-400">
            There are so many alternatives of firebase to implement
            authentication. Some of them are Auth0, Passport, Okta, Keycloak
            etc.
          </p>
        </div>
        <div className="p-5 bg-[#0a2e43] rounded-lg shadow-lg flex-1">
          <h2 className="text-xl mb-3">
            What other services does firebase provide other than authentication?
          </h2>
          <p className="text-slate-400">
            There are so many services firebase provide other than
            authentication. Here are some of them-
            <li>Cloud Firestore</li>
            <li>Cloud Functions</li>
            <li>Hosting</li>
            <li>Cloud Storage</li>
            <li>Google analytics</li>
            <li>Predictions</li>
            <li>Cloud Messaging</li>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
