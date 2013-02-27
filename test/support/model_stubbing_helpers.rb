module ModelStubbingHelpers
  def stub_record(type, options = {})
    build_stubbed(type, options)
  end

  def stub_edition(type, options = {})
    document = stub_record(:document)
    document.stubs(:to_param).returns(document.slug)
    stub_record(type, options.merge(document: document))
  end

  def next_record_id
    @next_id ||= 0
    @next_id += 1
  end
end
