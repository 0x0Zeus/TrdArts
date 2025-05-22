import { NavLink } from "react-router-dom";

const BlogsPage2 = () => {
  return (
    <div className="flex justify-center">
      <div className="flex w-[80%] max-w-[800px] flex-col gap-5">
        <NavLink to="/blogs/gold-ira-fees">
          <div className="grid items-center grid-cols-4 gap-10 px-5">
            <div className="h-[124px] overflow-hidden">
              <img
                src="/images/blogs/11/1.webp"
                className="h-[124px] w-full rounded-xl border-4 object-cover object-center"
              />
            </div>
            <div className="col-span-3">
              <h1 className="mb-5 text-2xl font-bold text-justify line-clamp-1">
              Gold IRA Fees: What to Expect and How to Minimize Costs
              </h1>
              <p className="text-justify line-clamp-3">
              Learn about the essential Gold IRA fees, custodial, storage, and transaction costs. Discover how to reduce fees and select the right custodian for your investment.
              </p>
            </div>
          </div>
        </NavLink>
        <NavLink to="/blogs/top-gold-ira-companies-consider-2024">
          <div className="grid items-center grid-cols-4 gap-10 px-5">
            <div className="h-[124px] overflow-hidden">
              <img
                src="/images/blogs/12/1.webp"
                className="h-[124px] w-full rounded-xl border-4 object-cover object-center"
              />
            </div>
            <div className="col-span-3">
              <h1 className="mb-5 text-2xl font-bold text-justify line-clamp-1">
              Top 5 Gold IRA Companies to Consider in 2024: Find the Best Providers for Your Retirement
              </h1>
              <p className="text-justify line-clamp-3">
              Are you looking for the best Gold IRA companies in 2024? Would you like to compare fees, customer service, storage options, and more? Top Gold IRA Companies in 2024, are reputable Gold IRA companies, the best Gold IRA companies and Gold IRA providers.
              </p>
            </div>
          </div>
        </NavLink>
        <NavLink to="/blogs/right-time-invest-gold">
          <div className="grid items-center grid-cols-4 gap-10 px-5">
            <div className="h-[124px] overflow-hidden">
              <img
                src="/images/blogs/13/1.webp"
                className="h-[124px] w-full rounded-xl border-4 object-cover object-center"
              />
            </div>
            <div className="col-span-3">
              <h1 className="mb-5 text-2xl font-bold text-justify line-clamp-1">
              Is Now the Right Time to Invest in Gold? Key Indicators to Watch
              </h1>
              <p className="text-justify line-clamp-3">
              Is now a good time to invest in gold? Discover key indicators like inflation, interest rates, and geopolitical tension to help you decide if gold is the right investment for your portfolio.
              </p>
            </div>
          </div>
        </NavLink>
        <NavLink to="/blogs/importance-custodians-storage-gold-iras">
          <div className="grid items-center grid-cols-4 gap-10 px-5">
            <div className="h-[124px] overflow-hidden">
              <img
                src="/images/blogs/14/1.webp"
                className="h-[124px] w-full rounded-xl border-4 object-cover object-center"
              />
            </div>
            <div className="col-span-3">
              <h1 className="mb-5 text-2xl font-bold text-justify line-clamp-1">
              The Importance of Custodians and Storage for Gold IRAs
              </h1>
              <p className="text-justify line-clamp-3">
              When it comes to securing your financial future with a Gold IRA (Individual Retirement Account), one critical component often overlooked is the role of custodians and storage. Custodians play a pivotal role in ensuring your gold is handled securely and in compliance with IRS regulations. At the same time, understanding how your gold is stored is vital. Whether you're storing in physical form or through a financial product like an ETF; the means of storage can greatly impact your investment strategy. 
              </p>
            </div>
          </div>
        </NavLink>
        <NavLink to="/blogs/15">
          <div className="grid items-center grid-cols-4 gap-10 px-5">
            <div className="h-[124px] overflow-hidden">
              <img
                src="/images/blogs/15/1.webp"
                className="h-[124px] w-full rounded-xl border-4 object-cover object-center"
              />
            </div>
            <div className="col-span-3">
              <h1 className="mb-5 text-2xl font-bold text-justify line-clamp-1">
              Gold IRA vs. Traditional IRA: Which Is Right for You?
              </h1>
              <p className="text-justify line-clamp-3">
              Confused about choosing between a Gold IRA, traditional IRA, and Roth IRA? Learn the differences, tax benefits, investment options, and risks in this guide to help you make the best retirement decision.
              </p>
            </div>
          </div>
        </NavLink>
        <NavLink to="/blogs/16">
          <div className="grid items-center grid-cols-4 gap-10 px-5">
            <div className="h-[124px] overflow-hidden">
              <img
                src="/images/blogs/16/1.webp"
                className="h-[124px] w-full rounded-xl border-4 object-cover object-center"
              />
            </div>
            <div className="col-span-3">
              <h1 className="mb-5 text-2xl font-bold text-justify line-clamp-1">
              How to Get Started with a Gold IRA: A Beginner’s Guide
              </h1>
              <p className="text-justify line-clamp-3">
              Learn the step-by-step process to open a Gold IRA, from choosing a custodian to selecting gold products. This guide simplifies your journey into secure retirement investing with gold.
              </p>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default BlogsPage2;