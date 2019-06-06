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
            prop="name"
            label="名称"
            width="120">
            </el-table-column>
            <el-table-column
            prop="sort"
            label="排序"
            width="120">
            </el-table-column>
            <el-table-column
            prop="createTime"
            label="创建时间"
            width="280">
            </el-table-column>
            <el-table-column
            prop="status"
            label="状态"
            width="100">
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
            pageHtml: 'page/category/category',
            tableData: [{
                id: '131401',
                name: '读书笔记',
                sort: 0,
                createTime: '2019-04-07 08:52:51',
                status: 0
            },{
                id: '131402',
                name: '日志点滴',
                sort: 1,
                createTime: '2019-04-08 08:52:51',
                status: 0
            },{
                id: '131403',
                name: '问题记录',
                sort: 2,
                createTime: '2019-04-09 08:52:51',
                status: 0
            },{
                id: '131404',
                name: '技巧积累',
                sort: 3,
                createTime: '2019-04-10 08:52:51',
                status: 0
            }
            ]
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