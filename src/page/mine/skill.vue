<template>
    <div>
        <el-table
            :data="tableData"
            >
            <el-table-column
            prop="id"
            label="编号"
            width="150">
            </el-table-column>
            <el-table-column
            prop="content"
            label="名称"
            width="120">
            </el-table-column>
            <el-table-column
            prop="img"
            label="图片"
            width="220">
                <template   slot-scope="scope">            
                    <img :src="scope.row.img"  min-width="70" height="70" />
                </template>
            </el-table-column>
            <el-table-column
            prop="poficiency"
            label="熟练度"
            width="120">
            </el-table-column>
            <el-table-column
            prop="sort"
            label="排序"
            width="120">
            </el-table-column>
            <el-table-column
            label="操作"
            width="100">
            <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                <el-button type="text" size="small">编辑</el-button>
            </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            pageHtml: 'page/mine/skill',
            tableData: [{
                id: '101',
                content: '技能3',
                img: 'http://file.kscs.site/149ab30f-ce84-4024-804b-f59806980ace1550826398484.jpg',
                poficiency: 88,
                sort: 0
            }, {
                id: '102',
                content: '技能4',
                img: 'http://file.kscs.site/1c5960b3-da44-4920-8dc2-f511be52ad37.jpg',
                poficiency: 92,
                sort: 2
            }, {
                id: '103',
                content: '技能5',
                img: 'http://file.kscs.site/14757797-1d9e-413d-b37e-acabbaa81cc01550826884268.jpeg',
                poficiency: 93,
                sort: 3
            }, {
                id: '104',
                content: '技能6',
                img: 'http://file.kscs.site/8d2c9e0a-82e1-4ef5-a126-496b0771b78e1550826181062.jpg',
                poficiency: 78,
                sort: 4
            }]
        };
    },
    methods: {
        handleClick(row) {
            console.log(row);
        }
    }
};
</script>

<style lang="css">
</style>