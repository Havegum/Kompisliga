<script>
import getStylingSize from '../../helpers/getStylingSize.js';

export let direction = 'vertical';
export let size = 'medium';

$: horizontal = Array('h', 'horisontal', 'horizontal', 'w', 'width', 'x').includes(direction);
</script>


<div style="{horizontal ? 'width' : 'height'}: {getStylingSize(size)};"></div>


<style>
div {
  width: 0;
  height: 0;
}
</style>
