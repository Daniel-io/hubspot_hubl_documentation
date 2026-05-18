{# https://developers.hubspot.com/docs/cms/start-building/building-blocks/drag-and-drop/overview #}
{# https://developers.hubspot.com/docs/cms/reference/hubl/tags/dnd-areas#dnd_area #}


# Layout
dnd_area
 └── dnd_section
      └── dnd_column
           └── dnd_row
                └── dnd_module



1. dnd_area

Top-level editable area.

Syntax
{% dnd_area "body_area", class="main", label="Main Content" %}

{% end_dnd_area %}

Can contain
✅ dnd_section
