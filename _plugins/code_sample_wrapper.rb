module Jekyll
  module Tags
    class CodeSampleWrapper < Liquid::Block

      def initialize(tag_name, markup, tokens)
        super
      end

      def render(context)
        site = context.registers[:site]
        converter = site.find_converter_instance(::Jekyll::Converters::Markdown)
        output = converter.convert(super(context))
        "<div class=\"code-sample-wrapper\">#{output}</div>"
      end
    end
  end
end

Liquid::Template.register_tag('code_sample_wrapper', Jekyll::Tags::CodeSampleWrapper)