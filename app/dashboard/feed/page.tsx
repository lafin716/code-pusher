import FeedItem from '@/components/feed/feed-item';
import SearchKeyword from '@/components/feed/search';
import WelcomeTitle from '@/components/feed/welcome-title';
import PageContainer from '@/components/layout/page-container';
import React from 'react';

async function FeedPage() {
  return (
    <PageContainer>
      <WelcomeTitle />
      <div className="flex flex-col gap-4">
        <SearchKeyword />
      </div>
      <div className="my-3 flex flex-col gap-4">
        <FeedItem />
        <FeedItem />
        <FeedItem />
        <FeedItem />
      </div>
    </PageContainer>
  );
}

export default FeedPage;
