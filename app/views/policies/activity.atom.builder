atom_feed language: 'en-GB', root_url: activity_policy_url(@policy.document) do |feed|
  feed.title "Latest activity on \"#{@policy.title}\""
  feed.subtitle 'Recently associated'
  feed.author do |author|
    author.name 'HM Government'
  end
  feed.updated @recently_changed_documents.first.timestamp_for_sorting

  @recently_changed_documents.each do |document|
    feed.entry(document, url: public_document_url(document), published: document.timestamp_for_sorting, updated: document.published_at) do |entry|
      entry.title document.title
      entry.category document.format_name.titleize
      entry.content govspeak_edition_to_html(document), type: 'html'
    end
  end
end
