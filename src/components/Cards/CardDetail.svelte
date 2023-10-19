<script lang="ts">
    import Card, { Content, PrimaryAction, Media, MediaContent } from '@smui/card';
    export let longDescription: string 
    export let title: string
    
</script>

<div class="card-display">
    <div class="card-container" style="height: 10rem; width: 30rem">
        <Card style="margin: 2rem">
            <Content style="color: #888; padding=2rem; text-align: center;">{title}</Content>
            <Content style="color: #888; padding=2rem; ">{@html longDescription}</Content>
        </Card>
    </div>
</div>

<style>
</style>
